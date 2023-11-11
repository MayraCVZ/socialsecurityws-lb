import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Seguimiento, SeguimientoRelations} from '../models';

export class SeguimientoRepository extends DefaultCrudRepository<
  Seguimiento,
  typeof Seguimiento.prototype.idSeguimiento,
  SeguimientoRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Seguimiento, dataSource);
  }
}
