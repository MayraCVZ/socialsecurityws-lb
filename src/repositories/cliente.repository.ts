import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Cliente, ClienteRelations} from '../models';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.idCliente,
  ClienteRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
