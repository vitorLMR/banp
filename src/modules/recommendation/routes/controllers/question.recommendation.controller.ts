import { Get } from '@nestjs/common';
import RecommendationRouter from '../decorators/recommendation.router.decorator';
import RecommendationService from '../../services/providers/recommendation.service';

@RecommendationRouter.question()
export default class QuestionRecommendationController {
  public constructor(private readonly service: RecommendationService) {}

  @Get('')
  public async find() {
    return await this.service.question.find.execute();
  }
}
