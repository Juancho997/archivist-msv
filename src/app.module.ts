import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Archive } from './archive/archive.entity';
import { ArchiveModule } from './archive/archive.module';
import { EventData } from './event-data/event-data.entity';
import { EventDataModule } from './event-data/event-data.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://juanbonino:jBJMz1fjyvMMtFxr@cluster0.zqrgyq5.mongodb.net/test',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Archive, EventData]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
    }),
    ArchiveModule,
    EventDataModule
  ]
})
export class AppModule { }
