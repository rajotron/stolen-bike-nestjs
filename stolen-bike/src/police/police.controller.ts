import {
    Controller,
    Req,
    Body,
    Post,
    UseGuards,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Put,
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiBearerAuth,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreatePoliceDto } from './dto/createPolice.dto';
import { PoliceService } from './police.service';
import { Police as PoliceEntity } from './police.entity';
import { PoliceDto } from './dto/police.dto';
import { UpdatePoliceDto } from './dto/updatePolice.dto';
import {
    BikesService
} from './../bikes/bikes.service';

@Controller('police')
export class PoliceController {
    constructor(private readonly policeService: PoliceService, private readonly bikesService: BikesService) {}

    @Get()
    @ApiOkResponse({ type: [PoliceDto] })
    findAll(): Promise<PoliceDto[]> {
        return this.policeService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: PoliceDto })
    @ApiParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<PoliceDto> {
        return this.policeService.findById(id);
    }



    @Post()
    @ApiCreatedResponse({ type: PoliceEntity })
    @ApiBearerAuth()
    async create(
        @Body() createPoliceDto: CreatePoliceDto,
        @Req() request,
    ) {
        var policeCreated = await this.policeService.create(createPoliceDto);
        var policeId = policeCreated['id'];
        var getBikesPending = await this.bikesService.find({
                where: {
                    enquiryStatus: 'PENDING'
                },
                order: [
                    ['dateOfPurchase', 'DESC']
                ],
                limit: 1
            });
            var bikeId;
            var status;
            if (getBikesPending.length != 0) {
                var newBikeForEnquiryJSON: any = {
                    enquiryBy: '',
                    enquiryStatus: 'IN PROCESS'
                }
                var newBikeForEnquiry = getBikesPending[0];
                bikeId = newBikeForEnquiry['id'];
                status = 'ON-DUTY';
                newBikeForEnquiryJSON.enquiryBy = policeId;
                var updateNewBikeForEnquiry = await this.bikesService.update(bikeId, newBikeForEnquiryJSON);
           var updatedPolice: any = {
                status: status,
                currentCaseId: bikeId
            }

            var updatedPoliceJSON = await this.policeService.update(policeId, updatedPolice);
            return updatedPoliceJSON;
            }
            
            	return policeCreated
            


            

    }

    @Post(':id')
    @ApiOkResponse({ type: PoliceEntity })
    @ApiParam({ name: 'id', required: true })
    @ApiBearerAuth()
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Req() request,
        @Body() updatePoliceDto: UpdatePoliceDto,
    ): Promise<PoliceEntity> {
        return this.policeService.update(id, updatePoliceDto);
    }
}
