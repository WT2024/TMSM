import os from 'os';
import Router from "koa-router";
import { OverviewResponse } from '../types/OverviewResponse';
import { User } from '../types/UsersResponse';

const router = new Router();

router.get('/',async (ctx: any) => {
    const nowUser: User = {
        userId: 1,
        userName: 'admin',
        userType: 'admin',
        password: 'admin',
    };
    const version = process.env.npm_package_version ? process.env.npm_package_version : 'Unknown';
    const OverviewInfo: OverviewResponse = { 
        name: os.hostname(),
        version: version,
        nowUser: nowUser,
        cpus: os.cpus(),
        totalMem: (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + "GB",
        usedMem: ((os.totalmem() - os.freemem()) / 1024 / 1024 / 1024).toFixed(2) + "GB",
    };
    ctx.body = OverviewInfo;
});

export default router;