import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BikesModule } from './bikes/bikes.module';

@Module({
  imports: [DatabaseModule, BikesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
