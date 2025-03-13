import Router from 'koa-router';
import overviewRouter from './overview_api';

const router = new Router({prefix: '/api'});
router.use(overviewRouter.routes())

export default router;