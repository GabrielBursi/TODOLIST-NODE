import express from 'express';
import bodyParser from 'body-parser';
import path from 'path'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import dotenv from 'dotenv'
dotenv.config()

import router from './routes/routes.js';
import connectMongoDB from './database/db.js';
connectMongoDB()

//!config
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')))

//!rotas
app.use('/',router)

app.listen(process.env.PORT)