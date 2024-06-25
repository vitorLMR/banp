import { Get, Query } from '@nestjs/common';
import RecommendationRouter from '../decorators/recommendation.router.decorator';
import RecommendationService from '../../services/recommendation.service';
import { AuthUser } from 'src/modules/auth/domain/decorator/auth-user.auth';
import User from 'src/modules/user/domain/entities/user.entity';
import PaginationDTO from 'src/core/dto/pagination.interface';

@RecommendationRouter.recommendation()
export default class RecommendationRecommendationController {
  public constructor(private readonly service: RecommendationService) {}

  @Get('')
  public async find(@AuthUser() user: User, @Query() dto: PaginationDTO) {
    return await this.service.findUsers.execute(user, dto);
  }
}
