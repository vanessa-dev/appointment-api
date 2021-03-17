import {Router} from 'express';
const routes = Router();
routes.get('/',(request, response)=>{
    response.json({message:'Hello World Node!'});
});
   
export default routes;