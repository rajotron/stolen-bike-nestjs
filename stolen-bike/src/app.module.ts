import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BikesModule } from './bikes/bikes.module';
import { PoliceModule } from './police/police.module';

@Module({
  imports: [DatabaseModule, BikesModule, PoliceModule],
  exports: [DatabaseModule, BikesModule, PoliceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
