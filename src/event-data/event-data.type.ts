import { ObjectType, Field, Int, ID, Float} from '@nestjs/graphql';

@ObjectType('EventData')
export class EventDataType {
    @Field(type => ID)
    id: string;

    @Field(type => String)
    userId: string; 

    @Field(type => String)
    userEmail: string;
}