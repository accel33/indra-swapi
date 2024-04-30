import { Controller, Get, Param, Post } from '@nestjs/common';
import { SwapiService } from './swapi.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@Controller('swapi')
@ApiTags('SWAPI API Español')
export class SwapiController {
  constructor(private readonly swapiService: SwapiService) {}

  @Get()
  @ApiOperation({
    summary: 'Obtener los datos de personajes de Starwars y traducirlos a español',
  })
  obtenerPersonasTraducir(): Promise<string> {
    return this.swapiService.obtenerPersonasTraducir();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Obtener los datos de un personaje de Starwars, lo traduce a español',
  })
  async obtenerUnaPersonaTraducir(@Param('id') id: number): Promise<string> {
    try {
      const persona = await this.swapiService.obtenerUnaPersonaTraducir(id);
      return persona;
    } catch (error) {
      console.error(error);
      return 'Error al obtener la información del personaje';
    }
  }

  @Post(':id')
  @ApiOperation({
    summary:
      'Obtener los datos de un personaje de Starwars, traducirlo a español y almacenarlo en DynamoDB',
  })
  obtenerUnaPersonaTraducirCrear(@Param('id') id: number): Promise<string> {
    return this.swapiService.obtenerUnaPersonaTraducirCrear(id);
  }
}
