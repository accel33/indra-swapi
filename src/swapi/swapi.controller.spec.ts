import { Test, TestingModule } from '@nestjs/testing';
import { SwapiController } from './swapi.controller';
import { SwapiService } from './swapi.service';

describe('SwapiController', () => {
  let controller: SwapiController;

  const mockAppService = {
    obtenerUnaPersonaTraducirCrear: jest.fn(() => {
      return {
        id: Date.now(),
        nombre: 'Luke Skywalker',
      };
    }),
    obtenerPersonasTraducir: jest.fn(() => {
      return { conteo: 87 };
    }),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SwapiController],
      providers: [SwapiService],
    })
      .overrideProvider(SwapiService)
      .useValue(mockAppService)
      .compile();

    controller = module.get<SwapiController>(SwapiController);
  });

  it('deberia estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('deberia obtener, traducirlo y mostrar la data', () => {
    expect(controller.obtenerUnaPersonaTraducirCrear(1)).toEqual({
      id: expect.any(Number),
      nombre: 'Luke Skywalker',
    });
    expect(mockAppService.obtenerUnaPersonaTraducirCrear).toHaveBeenCalled();
  });

  it('deberia obtener, traducir y mostrar el primer nivel', () => {
    expect(controller.obtenerPersonasTraducir()).toEqual({
      conteo: expect.any(Number),
    });
    expect(mockAppService.obtenerPersonasTraducir).toHaveBeenCalled();
  });
});
