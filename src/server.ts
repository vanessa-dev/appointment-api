import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.get('/',(request, response)=>{
 response.json({message:'Hello World Node!'});
})

app.listen(3335,()=>{
    console.log('Server Started on port 3335!');
})