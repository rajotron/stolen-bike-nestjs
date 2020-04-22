import { Table,AutoIncrement,PrimaryKey, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

const tableOptions = { timestamps: true };
@Table(tableOptions)
export class Bike extends Model<Bike> {
  @PrimaryKey
  @AutoIncrement
  
  @Column(DataType.BIGINT)
  id: number;
  
  @Column
  enquiryStatus:string;
  
  @Column
  enquiryBy:string;
  
  @UpdatedAt
  enquiryAt:string;
  
  @CreatedAt
  createdAt: Date;
  
  @Column
  comments:string;
  
  @Column
  vehicle_number:string;
  
  @Column
  nameofowner: string;
  
  @Column
  brandofbike: string;
  
  @Column
  modelno: string;
  
  @Column
  when: string;
  
  @Column
  insurance_company:string;
  
  @Column
  driving_license:string;
  
  @Column
  contactinfo:string;
  
  @Column
  age:string;
  
  @Column
  registrationno: string;
  
  @Column
  type: string;
  
  @Column
  fromWhere: string;
  }