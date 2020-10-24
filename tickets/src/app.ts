import express from 'express';
import 'express-async-errors';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@pb89tickets/common';

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test', // true if not test environment
  })
);

app.all('*', () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
