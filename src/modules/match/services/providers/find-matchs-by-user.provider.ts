import PaginationDTO from 'src/core/dto/pagination.interface';
import User from 'src/modules/user/domain/entities/user.entity';
import MatchRepository from '../../domain/repositories/match.repository';

export default class FindMatchsByUserProvider {
  public constructor(private readonly matchRepository: MatchRepository) {}

  public async execute(user: User, dto: PaginationDTO) {
    const matches = await this.matchRepository.manager.find({
      where: [{ user: { id: user.id } }, { userMeeting: { id: user.id } }],
      take: dto.take,
      skip: dto.take * (dto.page - 1),
      relations: ['user', 'userMeeting'],
    });

    // Combine the users from both sides of the matches into a single array
    const matchedUsers = matches.map((match) =>
      match.user.id === user.id ? match.userMeeting : match.user,
    );

    // Use a Set to keep track of unique user IDs
    const uniqueMatchedUsers = Array.from(
      new Set(matchedUsers.map((user) => user.id)),
    ).map((id) => matchedUsers.find((user) => user.id === id));

    return uniqueMatchedUsers;
  }
}
