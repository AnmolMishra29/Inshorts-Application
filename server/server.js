import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv'

import DefaultData from './default.js';
import Route from './routes/route.js';
import cors from 'cors';

const app =express();
dotenv.config();

app.use(cors());
app.use('/', Route);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"));
}

const PORT =process.env.PORT || 8000;

//const username = process.env.DB_USERNAME;
//const password = process.env.DB_PASSWORD;

//Connection(username, password);
const URL = process.env.MONGODB_URL || `mongodb://user:AnmolMishra@ac-i7jib6i-shard-00-00.u5a76jy.mongodb.net:27017,ac-i7jib6i-shard-00-01.u5a76jy.mongodb.net:27017,ac-i7jib6i-shard-00-02.u5a76jy.mongodb.net:27017/?ssl=true&replicaSet=atlas-10wcmm-shard-0&authSource=admin&retryWrites=true&w=majority`
Connection(URL);

app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));

DefaultData();
