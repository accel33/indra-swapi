import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PersonaService } from './persona.service';
import { CrearPersonaDto } from './dto/crear-persona.dto';
import { ActualizarPersonaDto } from './dto/actualizar-persona.dto';

@ApiTags('Personas')
@Controller('personas')
export class PersonaController {
  constructor(private readonly personaService: PersonaService) {}

  @Post()
  @ApiOperation({
    summary: 'Crear persona',
  })
  crear(@Body() crearPersonaDto: CrearPersonaDto) {
    return this.personaService.crear(crearPersonaDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Buscar personas',
  })
  buscar() {
    return this.personaService.buscar();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Buscar una persona',
  })
  buscarUno(@Param('id') id: string) {
    return this.personaService.buscarUno(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Actualizar información persona',
  })
  actualizar(@Body() actualizarPersonaDto: ActualizarPersonaDto) {
    return this.personaService.actualizar(actualizarPersonaDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar persona',
  })
  remover(@Param('id') id: string) {
    return this.personaService.remover(id);
  }
}
