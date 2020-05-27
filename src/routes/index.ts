import { Router } from 'express';
import projectsRouter from './projectsRouter.routes';

const routes = Router();

routes.use('/projects', projectsRouter);

export default routes;
