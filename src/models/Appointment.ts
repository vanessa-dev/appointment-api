import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity('appointments')
class Appointment{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    provider: string;

    @Column('timmestamp with time zone')
    date:Date;  
}
export default Appointment;