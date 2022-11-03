import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archive } from './archive.entity';
import { ArchiveService } from './archive.service';
import { ArchiveResolver } from './archive.resolver';
import { EventDataResolver } from 'src/event-data/event-data.resolver';
import { EventDataService } from '../event-data/event-data.service';
import { EventData } from '../event-data/event-data.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Archive, EventData])],
  providers: [ArchiveResolver, ArchiveService, EventDataResolver, EventDataService],
  exports: [ArchiveService]
})
export class ArchiveModule {}
