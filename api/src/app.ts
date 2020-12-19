import express, {Express, Response, Request} from 'express';
import router from './routers/v1';

let app: Express = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/v1', router);

export default app;
