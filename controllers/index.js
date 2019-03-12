import express from 'express';
import cors from 'cors';

import usersRouter from './users.controller';

const configureRouter = () => {
  const mainRouter = express.Router();
  mainRouter.use(
    cors(),
    usersRouter(),
  );
  return mainRouter;
};

export default configureRouter;
