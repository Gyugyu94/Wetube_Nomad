import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import {
  logout,
  getjoin,
  postjoin,
  getLogin,
  postLogin
} from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getjoin);
globalRouter.post(routes.join, postjoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
