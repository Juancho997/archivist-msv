import { InputType, Field, ID } from "@nestjs/graphql";
import { IsNumber, IsString } from "class-validator";

@InputType()
export class CreateEventDataInput {

    @Field()
    userId: string;

    @Field()
    userEmail: string;
}