import Koa from 'koa';
import index from './routers/index';

const app = new Koa();
app.use(index.routes());

app.listen(3000, ()=>{
    console.log('server is running at http://localhost:3000');
});