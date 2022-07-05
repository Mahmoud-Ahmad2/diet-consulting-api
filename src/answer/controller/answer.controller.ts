// import {
//   Body,
//   Controller,
//   HttpException,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';
// import { AnswerService } from '../service/answer.service';
// import { AnswerDto } from '../dto/answer.dto';
// import { User } from 'src/common/decoretor/user.decorator';

// @Controller('answer')
// export class AnswerController {
//   constructor(private readonly answerService: AnswerService) {}

//   @Post('addDraft/:questionId')
//   async addDraft(
//     @User() user,
//     @Body() answerDto: AnswerDto,
//     @Param('questionId') questionId: number,
//   ): Promise<object> {
//     const { id } = user;
//     const answer = await this.answerService.findAnswerByConsultantId(
//       id,
//       questionId,
//     );
//     if (answer) {
//       throw new HttpException('Already answered', 400);
//     }
//     const { title, description, recommendations } = answerDto;
//     return await this.answerService.addDraft(
//       questionId,
//       id,
//       title,
//       description,
//       recommendations,
//     );
//   }

//   @Patch('addAnswer/:questionId')
//   async addAnswer(
//     @User() user,
//     @Param('questionId') questionId: number,
//   ): Promise<object> {
//     const { id } = user;
//     const answer = await this.answerService.findAnswerByConsultantId(
//       id,
//       questionId,
//     );

//     if (!answer.isDraft) {
//       throw new HttpException('Already answered', 400);
//     }

//     await this.answerService.addAnswer(id, questionId);

//     return {
//       message: 'Successfully answered',
//     };
//   }
// }
