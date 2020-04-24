import { Table,AutoIncrement,PrimaryKey, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

const tableOptions = { timestamps: true };
@Table(tableOptions)
export class Bike extends Model<Bike> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;
  
  @Column({ defaultValue: 'PENDING' })
  enquiryStatus:string;
  
  @Column
  enquiryBy:number;
  
  @UpdatedAt
  enquiryAt:Date;
  
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
  when: Date;
  
  @Column
  insurance_company:string;
  
  @Column
  driving_license:string;
  
  @Column
  contactinfo:string;
  
  @Column
  dateOfPurchase:Date;
  
  @Column
  registrationno: string;
  
  @Column
  fromWhere: string;
  }