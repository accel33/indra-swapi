import { Injectable } from '@nestjs/common';
import { DynamoDBService } from '../dynamo-db/dynamo-db.service';
import { CrearPersonaDto } from './dto/crear-persona.dto';
import { ActualizarPersonaDto } from './dto/actualizar-persona.dto';
import { ErrorValidacion, validatorDto } from '../utils/validator-dto';

@Injectable()
export class PersonaService {
  private readonly tablaPersona = 'Persona';
  constructor(private readonly dynamoDBService: DynamoDBService) {}

  async crear(crearPersonaDto: CrearPersonaDto) {
    const err: ErrorValidacion = await validatorDto(CrearPersonaDto, crearPersonaDto);
    if (err.problema.length > 0) {
      return err;
    }
    return await this.dynamoDBService.put(this.tablaPersona, crearPersonaDto);
  }

  async buscar() {
    return await this.dynamoDBService.scan(this.tablaPersona);
  }

  async buscarUno(id: string) {
    return await this.dynamoDBService.get(this.tablaPersona, id);
  }

  async remover(id: string) {
    return await this.dynamoDBService.delete(this.tablaPersona, id);
  }

  async actualizar(updatePersonDto: ActualizarPersonaDto) {
    return await this.dynamoDBService.put(this.tablaPersona, updatePersonDto);
  }
}
