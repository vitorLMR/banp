import QuestionRepository from 'src/modules/recommendation/domain/repositories/question.repository';

export default class FindQuestionRecommendationProvider {
  public constructor(private readonly questionRepository: QuestionRepository) {}

  public async execute() {
    return await this.questionRepository.manager.find({
      relations: ['answers'],
    });
  }
}
