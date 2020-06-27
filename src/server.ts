import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (request, response) =>
  response.json({ 'his name is': 'John Cena' }),
);

app.listen(process.env.SERVER_PORT);
