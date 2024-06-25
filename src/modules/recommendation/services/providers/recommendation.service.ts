import { Injectable } from '@nestjs/common';
import QuestionService from './question-service/question.service';
import QuestionRepository from '../../domain/repositories/question.repository';

@Injectable()
export default class RecommendationService {
  public question: QuestionService;
  public constructor(private readonly questionRepository: QuestionRepository) {
    this.question = new QuestionService(this.questionRepository);
  }
}
