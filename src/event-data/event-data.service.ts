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


    // async getEventDataById(id: string): Promise<EventData> {
    //     return this.eventDataRepository.findOne({
    //         where: {
    //             userId : id
    //         }
    //     })
    // }

    async createEventData(createEventDataInput: CreateEventDataInput): Promise<EventData> {
        const { userId, userEmail } = createEventDataInput;

        
        // Event: {
        //     "id": "8c345594-b393-4e45-a59d-c57ae7027975",
        //     "date": 1666998812649, 
        //     "type": "CREATED",
        //     "data": {
        //         "id": 12,
        //         "email": "juan@mail.com"
        //     }
        // }


        // const newArchive = new Archive()
        // newArchive.eventId = event.id
        // newArchive.eventDate = event.date
        // newArchive.eventType = event.type
        // newArchive.eventData = new EventData()
        // user.eventData.id = event.data.id
        // user.eventData.email = event.data.email

        const newEventData = this.eventDataRepository.create({ id: uuid(), userId, userEmail });

        return await this.eventDataRepository.save(newEventData);
    }

    // async getArchiveByEventId(eventId: string): Promise<EventData> {
    //     return this.eventDataRepository.findOne({
    //         where: {
    //             eventId
    //         }
    //     })
    // }

    // async getArchivesByEventType(eventType: string): Promise<Archive[]> {
    //     return this.eventDataRepository.find({
    //         where: {
    //             eventType
    //         }
    //     })
    // }


}
