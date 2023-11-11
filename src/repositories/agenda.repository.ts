import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Agenda, AgendaRelations} from '../models';

export class AgendaRepository extends DefaultCrudRepository<
  Agenda,
  typeof Agenda.prototype.idAgenda,
  AgendaRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Agenda, dataSource);
  }
}
