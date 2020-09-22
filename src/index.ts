import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import logger from './services/logger';
import bodyParser from 'body-parser';
import 'reflect-metadata';
import { getConnection } from './services/db';
import baseRouter from './routes/index';

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const session = require('express-session')({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
})

app.use(session);
app.use(baseRouter);

app.listen(port, async () => {
    logger.info(`Connecting to the database....`);
    await getConnection();
    logger.info(`Done! Starting QRTag on port ${port}.`);
});

export default app;