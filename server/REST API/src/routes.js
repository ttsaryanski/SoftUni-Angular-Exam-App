import { Router } from 'express';
//import homeController from './controllers/homeController.js';
import authController from './controllers/authController.js';
import itemControler from './controllers/itemController.js';

const routes = Router();

//routes.use(homeController);
routes.use('/Please change here!!!', authController);
routes.use('/Please change here!!!', itemControler);

export default routes;