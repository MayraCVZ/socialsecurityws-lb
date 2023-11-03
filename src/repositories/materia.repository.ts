import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataJsonDataSource} from '../datasources';
import {Materia, MateriaRelations} from '../models';

export class MateriaRepository extends DefaultCrudRepository<
  Materia,
  typeof Materia.prototype.idMateria,
  MateriaRelations
> {
  constructor(
    @inject('datasources.dataJson') dataSource: DataJsonDataSource,
  ) {
    super(Materia, dataSource);
  }
}
