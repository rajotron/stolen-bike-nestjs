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
import { CreateBikeDto } from './dto/createBike.dto';
import { BikesService } from './bikes.service';
import { Bike as BikeEntity } from './bikes.entity';
import { BikeDto } from './dto/bike.dto';
import { UpdateBikeDto } from './dto/updateBike.dto';

@Controller('bikes')
export class BikesController {
    constructor(private readonly bikesService: BikesService) {}

    @Get()
    @ApiOkResponse({ type: [BikeDto] })
    findAll(): Promise<BikeDto[]> {
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
    create(
        @Body() createBikeDto: CreateBikeDto,
        @Req() request,
    ): Promise<BikeEntity> {
        return this.bikesService.create(createBikeDto);
    }

    @Put(':id')
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
