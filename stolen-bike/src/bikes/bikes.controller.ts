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
    forwardRef,
    Inject
} from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiBearerAuth,
    ApiOkResponse,
    ApiParam,
    ApiTags,
} from '@nestjs/swagger';
import { CreateBikeDto } from './dto/createBike.dto';
import { BikesService } from './bikes.service';
import { Bike as BikeEntity } from './bikes.entity';
import { BikeDto } from './dto/bike.dto';
import { UpdateBikeDto } from './dto/updateBike.dto';
import { PoliceService } from './../police/police.service';

@Controller('bikes')
export class BikesController {
    constructor(private readonly bikesService: BikesService, private policeService: PoliceService) {}

    @Get()
    @ApiOkResponse({ type: [BikeDto] })
    findAll() {
        return this.bikesService.findAll();
    }

    @Get(':id')
    @ApiOkResponse({ type: BikeDto })
    @ApiParam({ name: 'id', required: true })
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<BikeDto> {
        return this.bikesService.findById(id);
    }

    @Post()
    @ApiCreatedResponse({ type: BikeEntity })
    @ApiBearerAuth()
    async create(
        @Body() createBikeDto: CreateBikeDto,
        @Req() request,
    ) {
        var bikes = await this.bikesService.create(createBikeDto);
        var bikeUpdated:any;
        var policeUpdated:any;
        var bikeId = bikes['id'];
        var updatedBikeJSON:any = {
            enquiryBy:'',
            enquiryStatus:'IN PROCESS'
        }
        var updatedPoliceJSON:any = {
            name: "",
            status: "ON-DUTY",
            currentCaseId: 0
       }
        var idlePolice = await this.policeService.find({where:{status:'IDLE'}});
        /*console.log("********************************************************************")
        console.log("Police idle info --- ",idlePolice[0]);*/
        if(idlePolice.length != 0){
            var policeId = idlePolice[0]['id'];
            
            updatedBikeJSON['enquiryBy'] = Number(policeId);
            updatedPoliceJSON.currentCaseId = Number(bikeId);
            updatedPoliceJSON.name = idlePolice[0]['name'];

            /*console.log("Updated Police JSON --- ",updatedPoliceJSON)*/

            bikeUpdated = await this.bikesService.update(bikeId,updatedBikeJSON);
            policeUpdated = await this.policeService.update(policeId,updatedPoliceJSON);
        }
        var result = {
            bike:bikeUpdated,police:policeUpdated
        }
        return result
    }

    @Post(':id')
    @ApiOkResponse({ type: BikeEntity })
    @ApiParam({ name: 'id', required: true })
    @ApiBearerAuth()
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Req() request,
        @Body() updateBikeDto: UpdateBikeDto,
    ): Promise<BikeEntity> {
        return this.bikesService.update(id, updateBikeDto);
    }
}
