import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TaskCreationAttributes {
  name: string;
  description: string;
  dueDate: Date;
  priority: string;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttributes> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  dueDate: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  priority: string;
}
