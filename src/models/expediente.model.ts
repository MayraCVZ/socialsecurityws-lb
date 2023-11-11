import {Entity, model, property} from '@loopback/repository';

@model()
export class Expediente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idExpediente?: number;

  @property({
    type: 'number',
    required: true,
  })
  idAsunto: number;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaEntrega: string;

  @property({
    type: 'string',
    required: true,
  })
  perteneceA: string;


  constructor(data?: Partial<Expediente>) {
    super(data);
  }
}

export interface ExpedienteRelations {
  // describe navigational properties here
}

export type ExpedienteWithRelations = Expediente & ExpedienteRelations;
