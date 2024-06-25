import PaginationDTO from 'src/core/dto/pagination.interface';
import User from 'src/modules/user/domain/entities/user.entity';
import UserRepository from 'src/modules/user/domain/repositories/user.repository';
import { In, Not } from 'typeorm';

export default class FindUsersByRecommendationProvider {
  public constructor(private readonly userRepository: UserRepository) {}

  public async execute(user: User, dto: PaginationDTO) {
    const usersId = await this.userRepository.manager.find({
      select: {
        id: true,
      },
      where: {
        profile: {
          id: In(user.desire.map((value) => value.id)),
        },
        id: Not(user.id),
      },
      take: dto.take,
      skip: dto.take * (dto.page - 1),
      relations: ['profile'],
    });

    return await this.userRepository.manager.find({
      where: {
        id: In(usersId.map((user) => user.id)),
      },
      relations: ['profile'],
    });
  }
}
