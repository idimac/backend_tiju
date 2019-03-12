import express from 'express';
import UsersService from '../services/users.service';

const createUser = async (req, res, next) => {
  try {
    const credentials = req.body;
    const newUser = await UsersService.createUser(credentials);
    res.send(newUser);
  } catch (err) {
    next(err);
  }
};

const usersRouter = () => {
  const router = express.Router();
  router.post('/user/signup', createUser);
  return router;
};

export default usersRouter;
