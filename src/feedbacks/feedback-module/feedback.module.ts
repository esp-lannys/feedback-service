import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from '../../files/file-module/file.module';
import { Feedback } from '../../models';
import { FeedbackSchema } from '../../models/Feedbacks';
import { FeedbackController } from '../feedback-controller/feedback.controller';
import { FeedbackRepositoryImplementation } from '../feedback-repository/feedback.repository.implement';
import { IFeedbackRepository } from '../feedback-repository/feedback.repository.interface';
import { FeedbackServiceImplementation } from '../feedback-service/feedback.service.implement';
import { IFeedbackService } from '../feedback-service/feedback.service.interface';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Feedback.name, schema: FeedbackSchema },
    ]),
    FileModule,
  ],
  providers: [
    {
      provide: IFeedbackRepository,
      useClass: FeedbackRepositoryImplementation,
    },
    {
      provide: IFeedbackService,
      useClass: FeedbackServiceImplementation,
    },
  ],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
