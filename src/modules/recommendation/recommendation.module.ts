import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from './domain/entities/question.entity';
import QuestionRepository from './domain/repositories/question.repository';
import Answer from './domain/entities/answer.entity';
import AnswerRepository from './domain/repositories/answer.repository';
import Category from './domain/entities/category.entity';
import CategoryRepository from './domain/repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Answer, Category])],
  providers: [QuestionRepository, AnswerRepository, CategoryRepository],
  exports: [CategoryRepository, AnswerRepository],
})
export default class RecommendationModule {}
