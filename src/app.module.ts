import { Module } from '@nestjs/common';
import { PersonaModule } from './personas/persona.module';
import { DynamoDBModule } from './dynamo-db/dynamo-db.module';
import { SwapiModule } from './swapi/swapi.module';

@Module({
  imports: [DynamoDBModule, PersonaModule, SwapiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
