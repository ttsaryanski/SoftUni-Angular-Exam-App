import { Router } from "express";
//import homeController from './controllers/homeController.js';
import authController from "./controllers/authController.js";
import itemControler from "./controllers/itemController.js";

const routes = Router();

//routes.use(homeController);
routes.use("/auth", authController);
routes.use("/item", itemControler);

export default routes;
