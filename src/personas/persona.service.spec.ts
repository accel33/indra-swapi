import { Test, TestingModule } from '@nestjs/testing';
import { PersonaService } from './persona.service';
import { DynamoDBService } from '../dynamo-db/dynamo-db.service';

describe('PersonaService', () => {
  let service: PersonaService;
  const mockDynamoDB = {
    get: jest.fn(() => {
      return {
        id: Date.now(),
        nombre: 'Luke Skywalker',
      };
    }),
    scan: jest.fn(() => {
      return [];
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      // imports: [DynamoDBService],
      providers: [
        PersonaService,
        {
          provide: DynamoDBService, // Specify the provider
          useValue: mockDynamoDB, // Use your mock implementation
        },
      ],
    }).compile();

    service = module.get<PersonaService>(PersonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('deberia obtener, traducirlo y mostrar la data', async () => {
    expect(await service.buscarUno('id')).toEqual({
      id: expect.any(Number),
      nombre: 'Luke Skywalker',
    });
    expect(mockDynamoDB.get).toHaveBeenCalled();
  });

  it('deberia obtener y mostrar todos', async () => {
    expect(await service.buscar()).toEqual([]);
    expect(mockDynamoDB.scan).toHaveBeenCalled();
  });
});
