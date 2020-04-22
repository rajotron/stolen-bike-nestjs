import { ApiProperty } from '@nestjs/swagger';

export class UpdateBikeDto {
@ApiProperty()
   	readonly enquiryStatus:string;
@ApiProperty()
	readonly enquiryBy:string;
@ApiProperty()
	readonly enquiryAt:string;
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
	readonly when: string;
@ApiProperty()
	readonly insurance_company:string;
@ApiProperty()
	readonly driving_license:string;
@ApiProperty()
	readonly contactinfo:string;
@ApiProperty()
	readonly age:string;
@ApiProperty()
	readonly registrationno: string;
@ApiProperty()
	readonly type: string;
@ApiProperty()
	readonly fromWhere: string;
}