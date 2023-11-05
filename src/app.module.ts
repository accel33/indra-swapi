import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './personas/persona.module';
import { Translate } from './utils/translate';
import { DynamoDBModule } from './dynamo-db/dynamo-db.module';

@Module({
  imports: [DynamoDBModule, PersonaModule],
  controllers: [AppController],
  providers: [AppService, Translate],
})
export class AppModule {}
