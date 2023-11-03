import {Entity, model, property} from '@loopback/repository';

@model()
export class Cliente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idCliente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nomCliente: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoPa: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidoMa: string;

  @property({
    type: 'date',
    format: "YYYY-MM-DD"
  })
  fechaRegistro?: string;

  @property({
    type: 'date',
    format: "YYYY-MM-DD"
  })
  fechaNac?: string;

  @property({
    type: 'string'
  })
  lugarNac?: string;

  @property({
    type: 'string'
  })
  estadoCivil?: string;

  @property({
    type: 'number'
  })
  nss?: number;

  @property({
    type: 'string'
  })
  curp?: string;

  @property({
    type: 'string'
  })
  rfc?: string;

  @property({
    type: 'string'
  })
  estado?: string;

  @property({
    type: 'string',
  })
  ciudad?: string;

  @property({
    type: 'string',
  })
  colonia?: string;

  @property({
    type: 'string'
  })
  codigoPostal?: string;

  @property({
    type: 'string',
  })
  calle?: string;

  @property({
    type: 'string'
  })
  numero?: string;

  @property({
    type: 'string'
  })
  telefonoCasa?: string;

  @property({
    type: 'string'
  })
  celular?: string;

  @property({
    type: 'string',
  })
  email?: string;


  constructor(data?: Partial<Cliente>) {
    super(data);
  }
}

export interface ClienteRelations {
  // describe navigational properties here
}

export type ClienteWithRelations = Cliente & ClienteRelations;
