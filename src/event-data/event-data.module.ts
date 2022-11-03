import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventData } from './event-data.entity';
import { EventDataResolver } from './event-data.resolver';
import { EventDataService } from './event-data.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventData])],
  providers: [EventDataResolver,EventDataService],
  exports: [EventDataService]

})
export class EventDataModule { }