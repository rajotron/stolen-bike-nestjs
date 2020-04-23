import { ApiProperty } from '@nestjs/swagger';

export class CreatePoliceDto {
	@ApiProperty()
		readonly name:string;
	@ApiProperty()
		readonly status:string;
	@ApiProperty()
		readonly currentCaseId:number;
}