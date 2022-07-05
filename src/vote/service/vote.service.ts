import { Injectable, Inject, HttpException } from '@nestjs/common';
import { Vote } from '../model/vote.model';
import { providersEnum } from 'src/common/constant';

@Injectable()
export class VoteService {
  constructor(
    @Inject(providersEnum.VOTE_REPOSITORY)
    private readonly voteRepository: typeof Vote,
  ) {}
  async createVote(
    vote: string,
    consultantId: number,
    answerId: number,
  ): Promise<any> {
    const checkVote = await this.voteRepository.findOne({
      where: {
        vote,
        consultantId,
        answerId,
      },
    });

    if (checkVote) {
      throw new HttpException('You have already voted for this answer', 403);
    }

    const checkVoteSameVote =
      vote === 'up'
        ? await this.voteRepository.findOne({
            where: {
              vote: 'down',
              consultantId,
              answerId,
            },
          })
        : await this.voteRepository.findOne({
            where: {
              vote: 'up',
              consultantId,
              answerId,
            },
          });

    if (checkVoteSameVote) {
      return this.voteRepository.update(
        {
          vote,
        },
        {
          where: {
            id: checkVoteSameVote.id,
          },
        },
      );
    }
    return await this.voteRepository.create({
      vote,
      consultantId,
      answerId,
    });
  }
}
