import cors from 'cors';
import express from 'express';
import {
  viewsRouter,
  userRouter,
  categoryRouter,
  productRouter,
  orderRouter,
} from './routers';
import { errorHandler } from './middlewares';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(viewsRouter);
app.use('/api/users', userRouter);
app.use('/api/admin', userRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);
app.use(errorHandler);

export { app };
