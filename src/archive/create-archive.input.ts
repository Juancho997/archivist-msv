import { InputType, Field, ID, Float } from "@nestjs/graphql";
import { CreateEventDataInput } from '../event-data/create-event-data.input'
import { IsString, IsUUID } from 'class-validator';

@InputType()
export class CreateArchiveInput {

    @Field()
    eventId: string;

    @Field()
    eventType: string;

    @Field(type => String)
    eventDate: string;

    @Field()
    eventData: CreateEventDataInput;
}