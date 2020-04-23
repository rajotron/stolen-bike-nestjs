import { Module } from '@nestjs/common';
import { PoliceController } from './police.controller';
import { PoliceService } from './police.service';
import { policeProviders } from './police.providers'

@Module({
  controllers: [PoliceController],
  providers: [PoliceService,...policeProviders]
})
export class PoliceModule {}
