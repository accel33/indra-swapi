import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@Controller('starwars')
@ApiTags('SWAPI API Español')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('personas/')
  @ApiOperation({
    summary: 'Obtener los datos de personajes de Starwars y traducirlos a español',
  })
  obtenerPersonasTraducir(): Promise<string> {
    return this.appService.obtenerPersonasTraducir();
  }

  @Get('personas/:id')
  @ApiOperation({
    summary:
      'Obtener los datos de un personaje de Starwars, lo traduce a español y lo guarda en la BD',
  })
  obtenerUnaPersonaTraducirCrear(@Param('id') id: number): Promise<string> {
    return this.appService.obtenerUnaPersonaTraducirCrear(id);
  }
}
