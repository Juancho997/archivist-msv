import { ObjectType, Field, Int, ID, Float} from '@nestjs/graphql';

@ObjectType('EventData')
export class EventDataType {
    @Field(type => Int)
    id: any;

    @Field(type => String)
    userId: String; 

    @Field(type => String)
    userEmail: string;
}