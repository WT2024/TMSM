import Router from 'koa-router';
import overviewRouter from './overview_api';
import usersRouter from './users_api';

const router = new Router({prefix: '/api'});
router.use(overviewRouter.routes()).use(overviewRouter.allowedMethods());
router.use(usersRouter.routes()).use(usersRouter.allowedMethods());

export default router;