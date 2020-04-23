import { Table,AutoIncrement,PrimaryKey, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

const tableOptions = { timestamps: true };
@Table(tableOptions)
export class Police extends Model<Police> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;
  
  @Column
  name:string;

  @Column
  status:string;

  @Column
  currentCaseId:number;

  @UpdatedAt
  lastUpdated:Date;
  }