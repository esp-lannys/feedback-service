import { Module } from '@nestjs/common';
import { DatabaseModule, PrismaService } from '../../databases/database.module';
import { FileModule } from '../../files/file-module/file.module';
import { FeedbackController } from '../feedback-controller/feedback.controller';
import { FeedbackRepositoryImplementation } from '../feedback-repository/feedback.repository.implement';
import { IFeedbackRepository } from '../feedback-repository/feedback.repository.interface';
import { FeedbackServiceImplementation } from '../feedback-service/feedback.service.implement';
import { IFeedbackService } from '../feedback-service/feedback.service.interface';

@Module({
  imports: [FileModule, DatabaseModule],
  providers: [
    {
      provide: IFeedbackRepository,
      useClass: FeedbackRepositoryImplementation,
    },
    {
      provide: IFeedbackService,
      useClass: FeedbackServiceImplementation,
    },
    PrismaService
  ],
  controllers: [FeedbackController],
})
export class FeedbackModule {}
