import { Module,forwardRef } from '@nestjs/common';
import { PoliceController } from './police.controller';
import { PoliceService } from './police.service';
import { policeProviders } from './police.providers';
import { BikesModule } from './../bikes/bikes.module';

@Module({
  controllers: [PoliceController],
  providers: [PoliceService,...policeProviders],
  exports:[PoliceService,...policeProviders],
  imports:[forwardRef(() =>BikesModule)]
})
export class PoliceModule {}
