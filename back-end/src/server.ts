import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import routes from './routes';
import './database/connection';

dotenv.config();

const { PORT } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => console.log(`Patiently Waiting At ${PORT}`));
