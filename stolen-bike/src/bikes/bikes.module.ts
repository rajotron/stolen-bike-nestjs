import { Module ,forwardRef} from '@nestjs/common';
import { BikesController } from './bikes.controller';
import { BikesService } from './bikes.service';
import { bikesProviders } from './bikes.providers'
import { PoliceModule } from './../police/police.module';

@Module({
  controllers: [BikesController],
  providers: [BikesService,...bikesProviders],
  exports: [BikesService,...bikesProviders],
  imports:[forwardRef(() =>PoliceModule)]
})
export class BikesModule {}
