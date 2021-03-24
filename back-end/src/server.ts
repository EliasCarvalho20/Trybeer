import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import routes from './routes';
import './database/connection';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 3001;
const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => console.log(`You Better Lose Yourself In The port ${PORT}`));
