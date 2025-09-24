import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { AppDataSource } from './data-source';
import presentesRouter from './routes/presentes';
import * as dotenv from 'dotenv';
const app = express();
dotenv.config();

app.use(cors()); // libera CORS para tudo
app.use(bodyParser.json());

app.use('/presentes', presentesRouter);

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => {
      console.log('🚀 Servidor rodando em http://localhost:3000');
    });
  })
  .catch((err) => console.error('Erro ao conectar no banco:', err));
