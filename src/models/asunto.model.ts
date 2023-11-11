import {Entity, model, property} from '@loopback/repository';

@model()
export class Asunto extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idAsunto?: number;

  @property({
    type: 'number',
    required: true,
  })
  idCliente: number;

  @property({
    type: 'number',
    required: true,
  })
  ejercicio: number;

  @property({
    type: 'number',
    required: true,
  })
  numAsunto: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoAsunto: string;

  @property({
    type: 'string',
    required: true,
  })
  clacificacionAsunto: string;

  @property({
    type: 'string',
    required: true,
  })
  categoriaAsunto: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaInicio: string;

  @property({
    type: 'string',
    default: 'A',
  })
  estatus?: string;


  constructor(data?: Partial<Asunto>) {
    super(data);
  }
}

export interface AsuntoRelations {
  // describe navigational properties here
}

export type AsuntoWithRelations = Asunto & AsuntoRelations;
