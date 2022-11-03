import { ObjectType, Field, ID, Int, Float } from '@nestjs/graphql';
import { EventDataType } from '../event-data/event-data.type';

@ObjectType('Archive')
export class ArchiveType {
    @Field(type => Int)
    id: any;

    @Field(type => String)
    eventId: String;

    @Field(type => String)
    eventType: String;

    @Field(type => String)
    eventDate: String;

    @Field(type => EventDataType )
    eventData: EventDataType
}