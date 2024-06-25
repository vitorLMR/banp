import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Question from './domain/entities/question.entity';
import QuestionRepository from './domain/repositories/question.repository';
import Answer from './domain/entities/answer.entity';
import AnswerRepository from './domain/repositories/answer.repository';
import Category from './domain/entities/category.entity';
import CategoryRepository from './domain/repositories/category.repository';
import RecommendationService from './services/providers/recommendation.service';
import QuestionRecommendationController from './routes/controllers/question.recommendation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Question, Answer, Category])],
  providers: [
    QuestionRepository,
    AnswerRepository,
    CategoryRepository,
    RecommendationService,
  ],
  controllers: [QuestionRecommendationController],
  exports: [CategoryRepository, AnswerRepository],
})
export default class RecommendationModule {}
