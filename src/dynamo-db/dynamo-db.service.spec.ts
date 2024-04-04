import { DynamoDBService } from './dynamo-db.service';
import { InternalServerErrorException } from '@nestjs/common';
import { MockDynamoDBService } from './dynamo-db.service.mock';
import { Test, TestingModule } from '@nestjs/testing';

describe('DynamoDBService', () => {
  let dynamoDBService: DynamoDBService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DynamoDBService,
        {
          provide: DynamoDBService,
          useValue: new MockDynamoDBService(),
        },
      ],
    }).compile();
    dynamoDBService = module.get<DynamoDBService>(DynamoDBService);
  });

  it('deberia estar definido', () => {
    expect(dynamoDBService).toBeDefined();
  });

  it('deberia escanear la tabla y retornar items', async () => {
    const tableName = 'Persona';
    const result = await dynamoDBService.scan(tableName);
    expect(result).toEqual([{ id: '1', name: 'Item 1' }]);
  });

  it('deberia manejar errores al escanear la tabla', async () => {
    const tableName = 'Persona';

    try {
      await dynamoDBService.scan(tableName);
    } catch (error) {
      expect(error).toBeInstanceOf(InternalServerErrorException);
    }
  });

  it('deberia obtener la tabla y retornar items', async () => {
    const tableName = 'Persona';
    const result = await dynamoDBService.get(tableName, '1');
    expect(result).toEqual({ id: '1', name: 'Item 1' });
  });

  it('deberia crear la tabla y retornar items', async () => {
    const tableName = 'Persona';
    const result = await dynamoDBService.put(tableName, { id: '1', name: 'Item 1' });
    expect(result).toEqual({ id: '1', name: 'Item 1' });
  });

  it('deberia eliminar la tabla y retornar id', async () => {
    const tableName = 'Persona';
    const result = await dynamoDBService.delete(tableName, '1');
    expect(result).toEqual({ id: '1' });
  });

  it('debería actualizar un elemento y devolver el elemento actualizado', async () => {
    const tableName = 'Persona';
    const result = await dynamoDBService.put(tableName, {
      id: '1',
      name: 'Elemento actualizado',
    });
    expect(result).toEqual({ id: '1', name: 'Elemento actualizado' });
  });
});
