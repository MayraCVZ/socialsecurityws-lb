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
import {Seguimiento} from '../models';
import {SeguimientoRepository} from '../repositories';

export class SeguimientoControllerController {
  constructor(
    @repository(SeguimientoRepository)
    public seguimientoRepository : SeguimientoRepository,
  ) {}

  @post('/seguimientos')
  @response(200, {
    description: 'Seguimiento model instance',
    content: {'application/json': {schema: getModelSchemaRef(Seguimiento)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seguimiento, {
            title: 'NewSeguimiento',
            exclude: ['idSeguimiento'],
          }),
        },
      },
    })
    seguimiento: Omit<Seguimiento, 'idSeguimiento'>,
  ): Promise<Seguimiento> {
    return this.seguimientoRepository.create(seguimiento);
  }

  @get('/seguimientos/count')
  @response(200, {
    description: 'Seguimiento model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Seguimiento) where?: Where<Seguimiento>,
  ): Promise<Count> {
    return this.seguimientoRepository.count(where);
  }

  @get('/seguimientos')
  @response(200, {
    description: 'Array of Seguimiento model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Seguimiento, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Seguimiento) filter?: Filter<Seguimiento>,
  ): Promise<Seguimiento[]> {
    return this.seguimientoRepository.find(filter);
  }

  @patch('/seguimientos')
  @response(200, {
    description: 'Seguimiento PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seguimiento, {partial: true}),
        },
      },
    })
    seguimiento: Seguimiento,
    @param.where(Seguimiento) where?: Where<Seguimiento>,
  ): Promise<Count> {
    return this.seguimientoRepository.updateAll(seguimiento, where);
  }

  @get('/seguimientos/{id}')
  @response(200, {
    description: 'Seguimiento model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Seguimiento, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Seguimiento, {exclude: 'where'}) filter?: FilterExcludingWhere<Seguimiento>
  ): Promise<Seguimiento> {
    return this.seguimientoRepository.findById(id, filter);
  }

  @patch('/seguimientos/{id}')
  @response(204, {
    description: 'Seguimiento PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Seguimiento, {partial: true}),
        },
      },
    })
    seguimiento: Seguimiento,
  ): Promise<void> {
    await this.seguimientoRepository.updateById(id, seguimiento);
  }

  @put('/seguimientos/{id}')
  @response(204, {
    description: 'Seguimiento PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() seguimiento: Seguimiento,
  ): Promise<void> {
    await this.seguimientoRepository.replaceById(id, seguimiento);
  }

  @del('/seguimientos/{id}')
  @response(204, {
    description: 'Seguimiento DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.seguimientoRepository.deleteById(id);
  }

  @get('/seguimientos-by-asunto/{idAsunto}')
  async findByAsunto(
    @param.path.number('idAsunto') idAsunto: number,
  ): Promise<Seguimiento[]> {
    return this.seguimientoRepository.find({
      where: { idAsunto: idAsunto },
    });
  }
}
