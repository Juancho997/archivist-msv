import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventData } from './event-data.entity';
import { v4 as uuid } from 'uuid';
import { CreateEventDataInput } from './create-event-data.input';

@Injectable()
export class EventDataService {

    constructor(@InjectRepository(EventData)
    private eventDataRepository: Repository<EventData>
    ) { }

    async createEventData(createEventDataInput: CreateEventDataInput): Promise<EventData> {
        const { userId, userEmail } = createEventDataInput;
        const newEventData = this.eventDataRepository.create({ id: uuid(), userId, userEmail });

        return await this.eventDataRepository.save(newEventData);
    }
}
