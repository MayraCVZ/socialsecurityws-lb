import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Agenda} from '../models';
import {AgendaRepository} from '../repositories';

export class AgendaControllerController {
  constructor(
    @repository(AgendaRepository)
    public agendaRepository : AgendaRepository,
  ) {}

  @post('/agenda')
  @response(200, {
    description: 'Agenda model instance',
    content: {'application/json': {schema: getModelSchemaRef(Agenda)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agenda, {
            title: 'NewAgenda',
            exclude: ['idAgenda'],
          }),
        },
      },
    })
    agenda: Omit<Agenda, 'idAgenda'>,
  ): Promise<Agenda> {
    return this.agendaRepository.create(agenda);
  }

  @get('/agenda/count')
  @response(200, {
    description: 'Agenda model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Agenda) where?: Where<Agenda>,
  ): Promise<Count> {
    return this.agendaRepository.count(where);
  }

  @get('/agenda')
  @response(200, {
    description: 'Array of Agenda model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Agenda, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Agenda) filter?: Filter<Agenda>,
  ): Promise<Agenda[]> {
    return this.agendaRepository.find(filter);
  }

  @patch('/agenda')
  @response(200, {
    description: 'Agenda PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agenda, {partial: true}),
        },
      },
    })
    agenda: Agenda,
    @param.where(Agenda) where?: Where<Agenda>,
  ): Promise<Count> {
    return this.agendaRepository.updateAll(agenda, where);
  }

  @get('/agenda/{id}')
  @response(200, {
    description: 'Agenda model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Agenda, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Agenda, {exclude: 'where'}) filter?: FilterExcludingWhere<Agenda>
  ): Promise<Agenda> {
    return this.agendaRepository.findById(id, filter);
  }

  @patch('/agenda/{id}')
  @response(204, {
    description: 'Agenda PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Agenda, {partial: true}),
        },
      },
    })
    agenda: Agenda,
  ): Promise<void> {
    await this.agendaRepository.updateById(id, agenda);
  }

  @put('/agenda/{id}')
  @response(204, {
    description: 'Agenda PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() agenda: Agenda,
  ): Promise<void> {
    await this.agendaRepository.replaceById(id, agenda);
  }

  @del('/agenda/{id}')
  @response(204, {
    description: 'Agenda DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.agendaRepository.deleteById(id);
  }

  @get('/agenda-by-asunto/{idAsunto}')
  async findByAsunto(
    @param.path.number('idAsunto') idAsunto: number,
  ): Promise<Agenda[]> {
    return this.agendaRepository.find({
      where: { idAsunto: idAsunto },
    });
  }
}
