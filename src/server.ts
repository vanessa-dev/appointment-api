import'reflect-metadata';
import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import'./database';
require('dotenv').config()
const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.get('/',(request, response)=>{
 response.json({message:'Hello World Node!'});
})

app.listen(3335,()=>{
    console.log('Server Started on port 3335!');
})