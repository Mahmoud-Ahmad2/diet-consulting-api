import { Body, Controller, Param, Post } from '@nestjs/common';
import { VoteService } from '../service/vote.service';
import { User } from 'src/common/decorator/user.decorator';
import { Vote } from '../model/vote.model';
import { VoteDto } from '../dto/vote.dto';
import { Roles } from 'src/common/decorator/roles.decorator';
import { Role } from 'src/common/enum/role.enum';

@Controller('votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Roles(Role.User)
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
