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
import {Expediente} from '../models';
import {ExpedienteRepository} from '../repositories';

export class ExpedienteControllerController {
  constructor(
    @repository(ExpedienteRepository)
    public expedienteRepository : ExpedienteRepository,
  ) {}

  @post('/expedientes')
  @response(200, {
    description: 'Expediente model instance',
    content: {'application/json': {schema: getModelSchemaRef(Expediente)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expediente, {
            title: 'NewExpediente',
            exclude: ['idExpediente'],
          }),
        },
      },
    })
    expediente: Omit<Expediente, 'idExpediente'>,
  ): Promise<Expediente> {
    return this.expedienteRepository.create(expediente);
  }

  @get('/expedientes/count')
  @response(200, {
    description: 'Expediente model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Expediente) where?: Where<Expediente>,
  ): Promise<Count> {
    return this.expedienteRepository.count(where);
  }

  @get('/expedientes')
  @response(200, {
    description: 'Array of Expediente model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Expediente, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Expediente) filter?: Filter<Expediente>,
  ): Promise<Expediente[]> {
    return this.expedienteRepository.find(filter);
  }

  @patch('/expedientes')
  @response(200, {
    description: 'Expediente PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expediente, {partial: true}),
        },
      },
    })
    expediente: Expediente,
    @param.where(Expediente) where?: Where<Expediente>,
  ): Promise<Count> {
    return this.expedienteRepository.updateAll(expediente, where);
  }

  @get('/expedientes/{id}')
  @response(200, {
    description: 'Expediente model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Expediente, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Expediente, {exclude: 'where'}) filter?: FilterExcludingWhere<Expediente>
  ): Promise<Expediente> {
    return this.expedienteRepository.findById(id, filter);
  }

  @patch('/expedientes/{id}')
  @response(204, {
    description: 'Expediente PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Expediente, {partial: true}),
        },
      },
    })
    expediente: Expediente,
  ): Promise<void> {
    await this.expedienteRepository.updateById(id, expediente);
  }

  @put('/expedientes/{id}')
  @response(204, {
    description: 'Expediente PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() expediente: Expediente,
  ): Promise<void> {
    await this.expedienteRepository.replaceById(id, expediente);
  }

  @del('/expedientes/{id}')
  @response(204, {
    description: 'Expediente DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.expedienteRepository.deleteById(id);
  }

  @get('/expedientes-by-asunto/{idAsunto}')
  async findByAsunto(
    @param.path.number('idAsunto') idAsunto: number,
  ): Promise<Expediente[]> {
    return this.expedienteRepository.find({
      where: { idAsunto: idAsunto },
    });
  }
}
