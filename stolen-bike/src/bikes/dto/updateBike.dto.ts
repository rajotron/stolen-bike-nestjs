import { ApiProperty } from '@nestjs/swagger';

export class UpdateBikeDto {
@ApiProperty()
   	readonly enquiryStatus:string;
@ApiProperty()
	readonly enquiryBy:number;
@ApiProperty()
	readonly enquiryAt:Date;
@ApiProperty()
	readonly createdAt: Date;
@ApiProperty()
	readonly comments:string;
@ApiProperty()
	readonly vehicle_number:string;
@ApiProperty()
	readonly nameofowner: string;
@ApiProperty()
	readonly brandofbike: string;
@ApiProperty()
	readonly modelno: string;
@ApiProperty()
	readonly when: Date;
@ApiProperty()
	readonly insurance_company:string;
@ApiProperty()
	readonly driving_license:string;
@ApiProperty()
	readonly contactinfo:string;
@ApiProperty()
	readonly dateOfPurchase:Date;
@ApiProperty()
	readonly registrationno: string;
@ApiProperty()
	readonly fromWhere: string;
}