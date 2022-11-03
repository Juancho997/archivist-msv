import { ObjectType, Field, ID } from '@nestjs/graphql';
import { EventDataType } from '../event-data/event-data.type';

@ObjectType('Archive')
export class ArchiveType {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    eventId: string;

    @Field(type => String)
    eventType: string;

    @Field(type => String)
    eventDate: string;

    @Field(type => EventDataType)
    eventData: EventDataType
}