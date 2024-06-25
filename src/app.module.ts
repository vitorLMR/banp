import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import DatabaseModule from './core/database/database.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DatabaseModule],
})
export class AppModule {}

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ScheduleModule.forRoot(),
    DatabaseModule,
  ],
})
export class CronModule {}
