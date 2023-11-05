import { Test, TestingModule } from '@nestjs/testing';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';

describe('PersonaController', () => {
  let controller: PersonaController;
  const mockPersonaService = {
    buscarUno: jest.fn(() => {
      return {
        id: Date.now(),
        nombre: 'Luke Skywalker',
      };
    }),
    buscar: jest.fn(() => {
      return [];
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonaController],
      providers: [PersonaService],
    })
      .overrideProvider(PersonaService)
      .useValue(mockPersonaService)
      .compile();

    controller = module.get<PersonaController>(PersonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('deberia obtener, traducirlo y mostrar la data', () => {
    expect(controller.buscarUno('id')).toEqual({
      id: expect.any(Number),
      nombre: 'Luke Skywalker',
    });
    expect(mockPersonaService.buscarUno).toHaveBeenCalled();
  });

  it('deberia obtener y mostrar todos', () => {
    expect(controller.buscar()).toEqual([]);
    expect(mockPersonaService.buscar).toHaveBeenCalled();
  });
});
