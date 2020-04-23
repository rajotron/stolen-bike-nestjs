import { Module } from '@nestjs/common';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';
import { bikesProviders } from './bikes.providers'
import { PoliceModule } from './../police/police.module';

@Module({
  controllers: [BikesController],
  providers: [BikesService,...bikesProviders],
  imports:[PoliceModule]
})
export class BikesModule {}
