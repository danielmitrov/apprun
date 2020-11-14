import {Request, Response, Router} from 'express';

import DockerService from '../../services/docker';

const router = Router();

router.get('/running', async (req: Request, res: Response) => {
    const runningContainers = await DockerService.getRunningContainers();

    res.send(runningContainers);
});

export default router;