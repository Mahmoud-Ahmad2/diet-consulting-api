import { Module } from '@nestjs/common';
import { VoteService } from './service/vote.service';
import { VoteController } from './controller/vote.controller';
import { voteProviders } from './vote.providers';

@Module({
  controllers: [VoteController],
  providers: [VoteService, ...voteProviders],
})
export class VoteModule {}
