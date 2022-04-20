import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FileModule } from '../../files/file-module/file.module';
import { FeedbackModel } from '../../models';
import { FeedbackController } from '../feedback-controller/feedback.controller';
import { FeedbackRepositoryImplementation } from '../feedback-repository/feedback.repository.implement';
import { IFeedbackRepository } from '../feedback-repository/feedback.repository.interface';
import { FeedbackServiceImplementation } from '../feedback-service/feedback.service.implement';
import { IFeedbackService } from '../feedback-service/feedback.service.interface';

@Module({
  imports: [SequelizeModule.forFeature([FeedbackModel]), FileModule],
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
