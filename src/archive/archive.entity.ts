import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';
import { EventData } from 'src/event-data/event-data.entity';

@Entity()
export class Archive {

    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;
    
    @Column()
    eventId: string;

    @Column()
    eventDate: string;

    @Column()
    eventType : string;
    
    @Column()
    eventData: EventData;

    @Column()
    eventData_Id: string;
}