import { CrearPersonaDto } from '../personas/dto/crear-persona.dto';
import { validatorDto } from './validator-dto';

const requestBody = {
  nombre: 'Palpatine',
  altura: '172',
  masa: '77',
  color_de_pelo: 'rubio',
  color_de_piel: 'claro',
  color_de_ojos: 'azul',
  año_nacimiento: '19BBY',
  género: 'masculino',
  mundo_natal: 'Tatooine',
  películas: [],
  especie: [],
  vehículos: [],
  naves_estelares: [],
  creado: '2014-12-09T13:50:51.644000Z',
  editado: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.py4e.com/api/people/1/',
};

describe('Nombre', () => {
  it('Deberia validar el campo nombre vacio', async () => {
    const { nombre, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('nombre es requerido');
  });
  it('Deberia validar el campo nombre sea string', async () => {
    const body = { ...requestBody };
    body.nombre = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('nombre debe ser string');
  });
});
describe('Altura', () => {
  it('Deberia validar el campo altura vacio', async () => {
    const { altura, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('altura es requerido');
  });
  it('Deberia validar el campo altura sea string', async () => {
    const body = { ...requestBody };
    body.altura = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('altura debe ser string');
  });
});
describe('Masa', () => {
  it('Deberia validar el campo masa vacio', async () => {
    const { masa, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('masa es requerido');
  });
  it('Deberia validar el campo masa sea string', async () => {
    const body = { ...requestBody };
    body.masa = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('masa debe ser string');
  });
});
describe('Color_de_pelo', () => {
  it('Deberia validar el campo color_de_pelo vacio', async () => {
    const { color_de_pelo, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('color_de_pelo es requerido');
  });
  it('Deberia validar el campo color_de_pelo sea string', async () => {
    const body = { ...requestBody };
    body.color_de_pelo = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('color_de_pelo debe ser string');
  });
});
describe('Color_de_piel', () => {
  it('Deberia validar el campo color_de_piel vacio', async () => {
    const { color_de_piel, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('color_de_piel es requerido');
  });
  it('Deberia validar el campo color_de_piel sea string', async () => {
    const body = { ...requestBody };
    body.color_de_piel = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('color_de_piel debe ser string');
  });
});
describe('Año_nacimiento', () => {
  it('Deberia validar el campo año_nacimiento vacio', async () => {
    const { año_nacimiento, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('año_nacimiento es requerido');
  });
  it('Deberia validar el campo año_nacimiento sea string', async () => {
    const body = { ...requestBody };
    body.año_nacimiento = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('año_nacimiento debe ser string');
  });
});
describe('Género', () => {
  it('Deberia validar el campo género vacio', async () => {
    const { género, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('género es requerido');
  });
  it('Deberia validar el campo género sea string', async () => {
    const body = { ...requestBody };
    body.género = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('género debe ser string');
  });
});
describe('Mundo_natal', () => {
  it('Deberia validar el campo mundo_natal vacio', async () => {
    const { mundo_natal, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('mundo_natal es requerido');
  });
  it('Deberia validar el campo mundo_natal sea string', async () => {
    const body = { ...requestBody };
    body.mundo_natal = 32 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('mundo_natal debe ser string');
  });
});
describe('Películas', () => {
  it('Deberia validar el campo películas vacio', async () => {
    const { películas, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('películas es requerido');
  });
  it('Deberia validar el campo películas sea string', async () => {
    const body = { ...requestBody };
    body.películas = 'cadena' as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('películas debe ser array');
  });
});
describe('Especie', () => {
  it('Deberia validar el campo especie vacio', async () => {
    const { especie, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('especie es requerido');
  });
  it('Deberia validar el campo especie sea string', async () => {
    const body = { ...requestBody };
    body.especie = 'hola' as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('especie debe ser array');
  });
});
describe('Vehículos', () => {
  it('Deberia validar el campo vehículos vacio', async () => {
    const { vehículos, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('vehículos es requerido');
  });
  it('Deberia validar el campo vehículos sea string', async () => {
    const body = { ...requestBody };
    body.vehículos = 'vehiculo' as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('vehículos debe ser array');
  });
});
describe('Naves_estelares', () => {
  it('Deberia validar el campo naves_estelares vacio', async () => {
    const { naves_estelares, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('naves_estelares es requerido');
  });
  it('Deberia validar el campo naves_estelares sea string', async () => {
    const body = { ...requestBody };
    body.naves_estelares = 'nave' as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('naves_estelares debe ser array');
  });
});
describe('Creado', () => {
  it('Deberia validar el campo creado vacio', async () => {
    const { creado, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('creado es requerido');
  });
  it('Deberia validar el campo creado sea string', async () => {
    const body = { ...requestBody };
    body.creado = 42 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('creado debe ser string');
  });
});
describe('Editado', () => {
  it('Deberia validar el campo editado vacio', async () => {
    const { editado, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('editado es requerido');
  });
  it('Deberia validar el campo editado sea string', async () => {
    const body = { ...requestBody };
    body.editado = 52 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('editado debe ser string');
  });
});
describe('Url', () => {
  it('Deberia validar el campo url vacio', async () => {
    const { url, ...body } = requestBody;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('url es requerido');
  });
  it('Deberia validar el campo url sea string', async () => {
    const body = { ...requestBody };
    body.url = 100 as any;
    const err = await validatorDto(CrearPersonaDto, body);
    expect(err.mensaje).toContain('Error de validacion');
    expect(err.problema).toContain('url debe ser string');
  });
});
