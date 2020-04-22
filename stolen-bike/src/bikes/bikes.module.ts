import { Module } from '@nestjs/common';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';
import { bikesProviders } from './bikes.providers'

@Module({
  controllers: [BikesController],
  providers: [BikesService,...bikesProviders]
})
export class BikesModule {}
