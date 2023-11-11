import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Asunto, AsuntoRelations} from '../models';

export class AsuntoRepository extends DefaultCrudRepository<
  Asunto,
  typeof Asunto.prototype.idAsunto,
  AsuntoRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Asunto, dataSource);
  }
}
