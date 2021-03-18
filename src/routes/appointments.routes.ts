import {Router} from 'express';
import { parseISO} from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/createAppointmentService';

const appointmentsRouter= Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/',(request,response)=>{
    try{
        const {provider,date} = request.body;
        const parsedDate = parseISO(date);
        const createAppointment = new CreateAppointmentService(appointmentsRepository);
        const appointment = createAppointment.execute({date: parsedDate,provider})
        return response.json(appointment);
    }catch(err){
        return response.status(400).json({error: err.message});
    }
   
});

appointmentsRouter.get('/',(request,response)=>{
    const appointments = appointmentsRepository.all();
    return response.json({appointments});
});

export default appointmentsRouter;