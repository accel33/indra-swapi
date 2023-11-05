import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsArray, IsString, IsNumber } from 'class-validator';

export class CrearPersonaDto {
  @ApiProperty({
    example: 'Luke Skywalker',
    description: 'El nombre del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  nombre: string;

  @ApiProperty({
    example: '172',
    description: 'La altura del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  altura: number;

  @ApiProperty({
    example: '77',
    description: 'El peso del personaje en kg',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  masa: number;

  @ApiProperty({
    example: 'rubio',
    description: 'El color de pelo del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  color_pelo: string;

  @ApiProperty({
    example: 'clara',
    description: 'El color de la piel del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  color_piel: string;

  @ApiProperty({
    example: 'azul',
    description: 'El color de los ojos del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  color_ojos: string;

  @ApiProperty({
    example: '19BBY',
    description: 'El año de nacimiento del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  año_nacimiento: string;

  @ApiProperty({
    example: 'masculino',
    description: 'El género del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  género: string;

  @ApiProperty({
    example: 'Tatooine',
    description: 'El mundo natal del personaje',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  mundo_natal: string;

  @ApiProperty({
    example: ['Episodio 4', 'Episodio 5', 'Episodio 6'],
    description: 'Las películas en las que aparece el personaje',
  })
  @IsArray({ message: (args) => `${args.property} debe ser array` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  películas: string[];

  @ApiProperty({
    example: ['Humano', 'Jedi'],
    description: 'Las especies a las que pertenece el personaje',
  })
  @IsArray({ message: (args) => `${args.property} debe ser array` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  especie: string[];

  @ApiProperty({
    example: ['X-wing T-65B'],
    description: 'Los vehículos que ha utilizado el personaje',
  })
  @IsArray({ message: (args) => `${args.property} debe ser array` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  vehículos: string[];

  @ApiProperty({
    example: [],
    description: 'Las naves que ha utilizado el personaje',
  })
  @IsArray({ message: (args) => `${args.property} debe ser array` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  naves_estelares: string[];

  @ApiProperty({
    example: '2014-12-10T15:10:51.357000Z',
    description: 'La creacion de los datos json',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  creado: string;

  @ApiProperty({
    example: '2014-12-20T21:17:50.309000Z',
    description: 'La ultima vez que se edito los datos json',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  editado: string;

  @ApiProperty({
    example: 'https://swapi.py4e.com/api/people/2/',
    description: 'La url de los datos json',
  })
  @IsString({ message: (args) => `${args.property} debe ser string` })
  @IsNotEmpty({ message: (args) => `${args.property} es requerido` })
  url: string;
}
