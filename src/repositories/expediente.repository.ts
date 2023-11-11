import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Expediente, ExpedienteRelations} from '../models';

export class ExpedienteRepository extends DefaultCrudRepository<
  Expediente,
  typeof Expediente.prototype.idExpediente,
  ExpedienteRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Expediente, dataSource);
  }
}
