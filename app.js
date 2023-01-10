import express from 'express';
import path from 'path'
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
import router from './routes/routes.js';

//!config
const app = express();
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))

//!rotas
app.use('/',router)

app.listen(3000)