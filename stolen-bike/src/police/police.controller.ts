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
@Controller('police')
export class PoliceController {
    constructor(private readonly policeService: PoliceService) {}

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
    create(
        @Body() createPoliceDto: CreatePoliceDto,
        @Req() request,
    ): Promise<PoliceEntity> {
        return this.policeService.create(createPoliceDto);
    }

    @Put(':id')
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
