import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { CrearPersonaDto } from './crear-persona.dto';

export class ActualizarPersonaDto extends PartialType(CrearPersonaDto) {
  @ApiProperty({
    example: '1',
    description: 'El id de la persona',
  })
  id: string;
}
