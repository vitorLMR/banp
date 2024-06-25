import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Game from './domain/entities/game.entity';
import GameRepository from './domain/repositories/game.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Game])],
  providers: [GameRepository],
  exports: [GameRepository],
})
export default class GameModule {}
