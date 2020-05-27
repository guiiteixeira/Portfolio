import { Router } from 'express';
import { getRepository } from 'typeorm';
import Project from '../models/Project';

const projectsRouter = Router();

projectsRouter.post('/', async (request, response) => {
  const { name, description, imagePath, mediaPath, githubLink } = request.body;

  const repository = getRepository(Project);
  const project = repository.create({
    name,
    description,
    imagePath,
    mediaPath,
    githubLink,
  });

  await repository.save(project);

  return response.json({ project });
});

export default projectsRouter;
