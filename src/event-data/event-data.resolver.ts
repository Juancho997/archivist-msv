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

    @Mutation(returns => EventDataType)
    createEventData(
        @Args('createEventDataInput') createEventDataInput : CreateEventDataInput
    ) {
        return this.eventDataService.createEventData(createEventDataInput);
    }
}
