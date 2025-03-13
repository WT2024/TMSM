import os from 'os';
import Router from "koa-router";
import { OverviewResponse } from '../types/OverviewResponse';

const router = new Router();

router.get('/',async (ctx: any) => {
    const OverviewInfo: OverviewResponse = { 
        name: os.hostname(),
        version: os.version(),
        nowUser: {
            userId: 1,
            userName: 'admin',
            userType: 'admin',
            password: 'admin',
        },
        cpus: os.cpus(),
        totalMem: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + "GB",
        usedMem: ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2) + "GB",
        application: [
            {
                name: 'test',
                type: 'test',
                flag: 'test'
            }
        ]
};
    ctx.body = OverviewInfo;
});

export default router;