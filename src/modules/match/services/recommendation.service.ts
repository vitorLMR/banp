import { Injectable } from '@nestjs/common';
import QuestionRepository from '../domain/repositories/question.repository';
import QuestionService from './providers/question-service/question.service';
import FindUsersByRecommendationProvider from './providers/find-users-by-recomendation.provider';
import UserRepository from 'src/modules/user/domain/repositories/user.repository';

@Injectable()
export default class RecommendationService {
  public question: QuestionService;
  public findUsers: FindUsersByRecommendationProvider;
  public constructor(
    private readonly questionRepository: QuestionRepository,
    private readonly userRepository: UserRepository,
  ) {
    this.question = new QuestionService(this.questionRepository);
    this.findUsers = new FindUsersByRecommendationProvider(this.userRepository);
  }
}
