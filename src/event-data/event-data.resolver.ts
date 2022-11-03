import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EventDataService } from './event-data.service';
import { CreateEventDataInput } from './create-event-data.input';
import { EventData } from './event-data.entity';
import { EventDataType } from './event-data.type';

@Resolver(of => EventDataType)
export class EventDataResolver {
    constructor(
        private eventDataService: EventDataService
    ) { }

    // @Query(returns => EventDataType)
    // getEventDataById(
    //     @Args('id') id:string
    // ) {
    //     return this.eventDataService.getEventDataById(id);
    // }

    // @Query(returns => [EventDataType])
    // getEventDataByUserId(
    //     @Args('userId') userId:number
    // ) {
    //     return this.eventDataService.getEventDataByUserId(userId);
    // }

    // @Query(returns => [EventDataType])
    // getEventDataByUserEmail(
    //     @Args('userEmail') userEmail:string
    // ) {
    //     return this.eventDataService.getEventDataByUserEmail(userEmail);
    // }

    @Mutation(returns => EventDataType)
    createEventData(
        @Args('createEventDataInput') createEventDataInput : CreateEventDataInput
    ) {
        return this.eventDataService.createEventData(createEventDataInput);
    }
}
