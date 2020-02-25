require('dotenv/config');
const express = require('express');
const db = require('./database');
const ClientError = require('./client-error');
const app = express();
app.use(express.json());
app.get('/api/health-check', (req, res, next) => {
  db.query("select 'successfully connected' as \"message\"")
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/todos', (req, res, next) => {
  db.query('select * from todos')
    .then(response => {
      const todoResponse = response.rows;
      if (!todoResponse) {
        next(
          new ClientError(
            `No tasks found.${req.method} ${req.originalUrl}`,
            404
          )
        );
      } else {
        res.json(todoResponse);
      }
    })
    .catch(err => {
      next(err);
    });
});

app.post('/api/todos', (req, res, next) => {
  const createTodo = `insert into todos ("taskName", "details")
                        values($1, $2)
                        returning *`;
  const params = [req.body.taskName, req.body.details];
  db.query(createTodo, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      next(err);
    });
});

app.delete('/api/todos', (req, res, next) => {
  const createTodo = `delete * from todos
                        where "taskName"=$1 and "details"=$2
                        returning *`;
  const params = [req.body.taskName, req.body.details];
  db.query(createTodo, params)
    .then(result => {
      res.status(201).json(result.rows[0]);
    })
    .catch(err => {
      next(err);
    });
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
