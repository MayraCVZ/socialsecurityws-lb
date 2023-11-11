import {Entity, model, property} from '@loopback/repository';

@model()
export class Seguimiento extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idSeguimiento?: number;

  @property({
    type: 'number',
    required: true,
  })
  idAsunto: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  horaInicio: string;

  @property({
    type: 'string',
    required: true,
  })
  horaFin: string;

  @property({
    type: 'string',
    required: true,
  })
  seguimiento: string;


  constructor(data?: Partial<Seguimiento>) {
    super(data);
  }
}

export interface SeguimientoRelations {
  // describe navigational properties here
}

export type SeguimientoWithRelations = Seguimiento & SeguimientoRelations;
