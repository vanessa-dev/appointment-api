import'reflect-metadata';
import express,{Response, Request, NextFunction} from 'express';
import 'express-async-errors';

import routes from './routes';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

import'./database';
require('dotenv').config()
const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use((err: Error,request: Request,response: Response, _: NextFunction)=>{
    if(err instanceof AppError){
        return response.status(err.statusCode).json({
            status:'error',
            message: err.message
        });
    }

    console.error(err);

    return response.status(500).json({
        status: 'erro',
        message:'Internal Server Error'
    });
});

app.get('/',(request, response)=>{
 response.json({message:'Hello World Node!'});
})

app.listen(3335,()=>{
    console.log('Server Started on port 3335!');
})