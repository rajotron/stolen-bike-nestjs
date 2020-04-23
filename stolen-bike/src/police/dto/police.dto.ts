import { ApiProperty } from '@nestjs/swagger';

export class PoliceDto {
	@ApiProperty()
		readonly id:number;
	@ApiProperty()
		readonly name:string;
	@ApiProperty()
		readonly status:string;
	@ApiProperty()
		readonly currentCaseId:number;
	@ApiProperty()
		readonly lastUpdated:Date;
		
}