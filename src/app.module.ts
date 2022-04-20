import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './databases/database.module';
import { FeedbackModule } from './feedbacks/feedback-module/feedback.module';
import { FileModule } from './files/file-module/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    FeedbackModule,
    FileModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
