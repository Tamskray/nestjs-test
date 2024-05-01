import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TasksListsCreationAttributes {
  name: string;
}

@Table({ tableName: 'tasks-lists' })
export class TasksLists extends Model<
  TasksLists,
  TasksListsCreationAttributes
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;
}
