import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import routes from './routes';
import userRouter from './routers/userRouter';
import videoRouter from './routers/videoRouter';
import globalRouter from './routers/globalRouter';

const app = express();

app.set('view engine', 'pug');

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());

app.use('/', globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
