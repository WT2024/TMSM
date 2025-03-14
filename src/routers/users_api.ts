import Router from "koa-router";
import { User, UsersResponse } from "../types/UsersResponse";

const router = new Router();

router.get('/users',async (ctx: any) => {
    const users: User[] = [
        {
            userId: 1,
            userName: 'admin',
            userType: 'admin',
            password: 'admin',
        },
        {
            userId: 2,
            userName: 'user',
            userType: 'user',
            password: 'user',
        },
    ];
    const usersResponse: UsersResponse = {
        total: users.length,
        users: users
    }
    ctx.body = usersResponse;
})

export default router;