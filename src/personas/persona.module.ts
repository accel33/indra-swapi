import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import { DynamoDBModule } from '../dynamo-db/dynamo-db.module';

@Module({
  imports: [DynamoDBModule],
  controllers: [PersonaController],
  providers: [PersonaService],
})
export class PersonaModule {}
