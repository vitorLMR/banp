import { applyDecorators } from '@nestjs/common';
import BaseDecorator from 'src/core/routes/base.decorator';

class RecommendationRouterDefinition extends BaseDecorator {
  public constructor() {
    super({ name: 'Recommendation', route: 'recommendation' });
  }

  public base() {
    return applyDecorators(this.controller());
  }

  public question() {
    return applyDecorators(this.controller('question'));
  }
}

const RecommendationRouter = new RecommendationRouterDefinition();

export default RecommendationRouter;
