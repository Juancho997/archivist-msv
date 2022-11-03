import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ArchiveService } from './archive.service';
import { CreateArchiveInput } from './create-archive.input';
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
    getArchive(
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


    @Mutation(returns => ArchiveType)
    createArchive(
        @Args('createArchiveInput') createArchiveInput: CreateArchiveInput
    ) {
        return this.archiveService.createArchive(createArchiveInput);
    }
}
