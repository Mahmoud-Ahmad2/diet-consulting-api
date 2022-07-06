import { Body, Controller, Param, Post } from '@nestjs/common';
import { VoteService } from '../service/vote.service';
import { User } from 'src/common/decorator/user.decorator';
import { Vote } from '../model/vote.model';
import { VoteDto } from '../dto/vote.dto';

@Controller('votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post('/:answerId')
  async create(
    @User() user,
    @Body() voteDto: VoteDto,
    @Param('answerId') answerId: number,
  ): Promise<Vote> {
    const { id } = user;
    const { vote } = voteDto;
    return this.voteService.createVote(vote, id, answerId);
  }
}
