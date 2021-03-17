import {Router} from 'express';
import {uuid} from 'uuidv4';

const appointmentsRouter= Router();

const appointments = [];

appointmentsRouter.post('/',(request,response)=>{
    const {provider,date} = request.body;
    const appointment ={
        id:uuid(),
        provider,
        date
    }
    appointments.push(appointment);
    return response.json(appointment);
});
appointmentsRouter.get('/',(request,response)=>{
    return response.json({message:'Hello World!'})
});
export default appointmentsRouter;