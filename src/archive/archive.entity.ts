import { Entity, PrimaryColumn, Column, ObjectIdColumn } from 'typeorm';

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
    eventData: string;
}