import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateArchiveInput } from './create-archive.input';
import { ArchiveService } from './archive.service';
import { ArchiveType } from './archive.type';

@Resolver(of => ArchiveType)
export class ArchiveResolver {
    constructor(
        private archiveService: ArchiveService
    ) { }

    @Query(returns => [ArchiveType])
    getAllArchives(){
        return this.archiveService.getAllArchives();
    }

    @Query(returns => ArchiveType)
    getArchiveById(
        @Args('id') id:string
    ) {
        return this.archiveService.getArchiveById(id);
    }

    @Query(returns => ArchiveType)
    getArchiveByEventId(
        @Args('eventId') eventId: string
    ) {
        return this.archiveService.getArchiveByEventId(eventId)
    }

    @Query(returns => [ArchiveType])
    getArchivesByEventType(
        @Args('eventType') eventType : string
    ) {
        return this.archiveService.getArchivesByEventType(eventType)
    }

    @Query(returns => [ArchiveType])
    getArchivesByEventCreationDate(
        @Args('eventCreationDate') eventCreationDate : string 
    ) {
        return this.archiveService.getArchivesByEventCreationDate(eventCreationDate)
    }


    @Mutation(returns => ArchiveType)
    createArchive(
        @Args('createArchiveInput') createArchiveInput: CreateArchiveInput
    ) {
        return this.archiveService.createArchive(createArchiveInput);
    }
}
