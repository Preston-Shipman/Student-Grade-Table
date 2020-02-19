require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');
const fetch = require('node-fetch');
const app = express();
app.use(staticMiddleware);
app.use(sessionMiddleware);
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

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
