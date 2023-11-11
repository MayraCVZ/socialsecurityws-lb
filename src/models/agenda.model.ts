import {Entity, model, property} from '@loopback/repository';

@model()
export class Agenda extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idAgenda?: number;

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
  hora: string;

  @property({
    type: 'string',
    required: true,
  })
  comentarios: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoCita: string;


  constructor(data?: Partial<Agenda>) {
    super(data);
  }
}

export interface AgendaRelations {
  // describe navigational properties here
}

export type AgendaWithRelations = Agenda & AgendaRelations;
