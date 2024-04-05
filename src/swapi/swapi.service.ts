import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { DynamoDBService } from '../dynamo-db/dynamo-db.service';
import { CrearPersonaDto } from '../personas/dto/crear-persona.dto';
import { Translate } from '../utils/translate';
import { ErrorValidacion, validatorDto } from '../utils/validator-dto';

@Injectable()
export class SwapiService {
  private readonly baseUrl = 'https://swapi.py4e.com/api';
  private readonly translator: Translate;
  constructor(
    private readonly dynamoDBService: DynamoDBService,
    translator: Translate,
  ) {
    this.translator = translator;
  }

  async obtenerPersonasTraducir(): Promise<string> {
    try {
      const data = await this.obtenerDataSwapi(`${this.baseUrl}/people/`);
      const dataTraducida = await this.traducirData(data);
      return JSON.stringify(dataTraducida, null, 2);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async obtenerUnaPersonaTraducir(id: number): Promise<any> {
    try {
      const data = await this.obtenerDataSwapi(`${this.baseUrl}/people/${id}/`);
      const dataTraducida = await this.traducirUno(data);
      return JSON.stringify(dataTraducida, null, 2);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async obtenerUnaPersonaTraducirCrear(id: number): Promise<any> {
    try {
      const data = await this.obtenerDataSwapi(`${this.baseUrl}/people/${id}/`);

      // Traducir data
      const dataTraducida = await this.traducirUno(data);

      // Validar data
      const err: ErrorValidacion = await validatorDto(CrearPersonaDto, dataTraducida);
      if (err.problema.length > 0) {
        return err;
      }

      const persona = await this.dynamoDBService.put('Persona', dataTraducida);
      if (!persona) {
        return { mensaje: 'Error al intentar ingresar personaje en la bd' };
      }

      return JSON.stringify(dataTraducida, null, 2);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async obtenerDataSwapi(url: string): Promise<any> {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error al obtener data swapi:', error);
      throw new Error('Error al obtener data swapi');
    }
  }

  async traducirData(data: any) {
    let json: any = {};
    json = await this.traducirUno(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { resultados, ...jsonPrimerNivel } = json;
    const todosLosResultados = [];
    for (const resultados of data.results) {
      todosLosResultados.push(await this.traducirUno(resultados));
    }
    return {
      ...jsonPrimerNivel,
      resultados: todosLosResultados,
    };
  }

  async traducirUno(data: any) {
    const resultados = data;

    const llaves = Object.keys(resultados);
    const valores = llaves.map((key) => resultados[key]);

    const llavesString = llaves.join(`\n `);

    const llavesStringTraducidas = await this.translator.translateText(llavesString);
    const llavesArregloTraducidas = llavesStringTraducidas.split('\n ');

    const objetoTraducido: { [key: string]: string } = {};

    llavesArregloTraducidas.forEach((item, index) => {
      const llave = llavesArregloTraducidas[index];
      const llaveFormatoSwapi = llave.replace(/ /g, '_');
      const valor = valores[index];
      objetoTraducido[llaveFormatoSwapi] = valor;
    });

    return objetoTraducido;
  }
}
