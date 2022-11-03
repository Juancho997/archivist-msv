import { Entity, Column, ObjectIdColumn, PrimaryColumn } from "typeorm"

@Entity()
export class EventData {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;

    @Column()
    userId: string;

    @Column()
    userEmail: string;
}