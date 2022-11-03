import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Archive } from './archive.entity';
import { v4 as uuid } from 'uuid';
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

    async getArchiveById(_id: string): Promise<Archive> {
        return this.archiveRepository.findOne({
            where: {
                _id
            }
        })
    }

    async createArchive(createArchiveInput: CreateArchiveInput): Promise<Archive> {

        const { eventId, eventType, eventData, eventDate } = createArchiveInput;

        const newArchive = this.archiveRepository.create({ id: uuid(), eventId, eventType, eventDate });
        const newEventData = await this.eventDataResolver.createEventData(eventData);

        newArchive.eventData = newEventData._id;

        console.log(`New archive ID : ${newArchive.id} created`)

        return await this.archiveRepository.save(newArchive);
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
}
