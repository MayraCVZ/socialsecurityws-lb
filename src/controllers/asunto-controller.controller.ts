import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Asunto} from '../models';
import {AsuntoRepository} from '../repositories';

export class AsuntoControllerController {
  constructor(
    @repository(AsuntoRepository)
    public asuntoRepository : AsuntoRepository,
  ) {}

  @post('/asuntos')
  @response(200, {
    description: 'Asunto model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asunto)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asunto, {
            title: 'NewAsunto',
            exclude: ['idAsunto'],
          }),
        },
      },
    })
    asunto: Omit<Asunto, 'idAsunto'>,
  ): Promise<Asunto> {
    return this.asuntoRepository.create(asunto);
  }

  @get('/asuntos/count')
  @response(200, {
    description: 'Asunto model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asunto) where?: Where<Asunto>,
  ): Promise<Count> {
    return this.asuntoRepository.count(where);
  }

  @get('/asuntos')
  @response(200, {
    description: 'Array of Asunto model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asunto, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asunto) filter?: Filter<Asunto>,
  ): Promise<Asunto[]> {
    return this.asuntoRepository.find(filter);
  }

  @patch('/asuntos')
  @response(200, {
    description: 'Asunto PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asunto, {partial: true}),
        },
      },
    })
    asunto: Asunto,
    @param.where(Asunto) where?: Where<Asunto>,
  ): Promise<Count> {
    return this.asuntoRepository.updateAll(asunto, where);
  }

  @get('/asuntos/{id}')
  @response(200, {
    description: 'Asunto model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asunto, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Asunto, {exclude: 'where'}) filter?: FilterExcludingWhere<Asunto>
  ): Promise<Asunto> {
    return this.asuntoRepository.findById(id, filter);
  }

  @patch('/asuntos/{id}')
  @response(204, {
    description: 'Asunto PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asunto, {partial: true}),
        },
      },
    })
    asunto: Asunto,
  ): Promise<void> {
    await this.asuntoRepository.updateById(id, asunto);
  }

  @put('/asuntos/{id}')
  @response(204, {
    description: 'Asunto PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() asunto: Asunto,
  ): Promise<void> {
    await this.asuntoRepository.replaceById(id, asunto);
  }

  @del('/asuntos/{id}')
  @response(204, {
    description: 'Asunto DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.asuntoRepository.deleteById(id);
  }
}
