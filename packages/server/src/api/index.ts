import {Router} from 'express';

import containersRoutes from './containers';

const router = Router();

router.use('/containers', containersRoutes);

export default router;