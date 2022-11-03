import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { Archive } from './archive.entity';
import { CreateArchiveInput } from './create-archive.input';
import { EventDataResolver } from '../event-data/event-data.resolver';

@Injectable()
export class ArchiveService {

    constructor(@InjectRepository(Archive)
    private archiveRepository: Repository<Archive>,
    private eventDataResolver: EventDataResolver
    ) { }


    async getAllArchives(): Promise<Archive[]> {
        return this.archiveRepository.find()
    }

    async getArchiveById(id: string): Promise<Archive> {
        return this.archiveRepository.findOne({
            where: {
                id
            }
        })
    }
    
    async getArchiveByEventId(eventId: string): Promise<Archive> {
        return this.archiveRepository.findOne({
            where: {
                eventId
            }
        })
    }

    async getArchivesByEventType(eventType: string): Promise<Archive[]> {
        return this.archiveRepository.find({
            where: {
                eventType
            }
        })
    }

    async createArchive(createArchiveInput: CreateArchiveInput): Promise<Archive> {

        const { eventId, eventType, eventData, eventDate } = createArchiveInput;

        const newArchive = this.archiveRepository.create({ id: uuid(), eventId, eventType, eventDate });
        const newEventData = await this.eventDataResolver.createEventData(eventData);

        newArchive.eventData_Id = newEventData._id
        newArchive.eventData = newEventData;

        console.log(`New archive ID : ${newArchive.id} created`)

        return await this.archiveRepository.save(newArchive);
    }

    async getArchivesByEventCreationDate(eventCreationDate : string): Promise<Archive[]>{
        return this.archiveRepository.find({
            where: {
                eventDate : {
                    $in: [eventCreationDate]
                } as any
            }
        })
    }
}