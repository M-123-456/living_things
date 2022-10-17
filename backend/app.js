import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { router as livesRouter } from './routes/lives-routes.js';
import { router as usersRouter } from './routes/users-routes.js';


dotenv.config();

const app = express();
app.use(express.json());

// Cors
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Routes
app.use('/api/lives', livesRouter);
app.use('/api/users', usersRouter);


// Connect to database and listen server
mongoose
    .connect(process.env.DB_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`listening on port ${process.env.PORT}`);
        })
        .catch((err) => {
            console.log(err);
        })
    });