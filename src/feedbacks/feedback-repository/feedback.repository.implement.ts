import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback, FeedbackDocument } from '../../models/Feedbacks';
import { IFeedbackRepository } from './feedback.repository.interface';

@Injectable()
export class FeedbackRepositoryImplementation implements IFeedbackRepository {
  constructor(
    @InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>,
  ) {}

  findAll(): Promise<FeedbackDocument[]> {
    return this.feedbackModel.find().exec();
  }

  findAllByCondition(
    limit: number,
    offset: number,
    condition: any,
  ): Promise<FeedbackDocument[]> {
    return this.feedbackModel
      .find(condition)
      .limit(limit)
      .skip(offset)
      .sort({ created_at: 'desc' })
      .exec();
  }

  findById(id: string): Promise<FeedbackDocument> {
    return this.feedbackModel.findById(id).exec();
  }

  create(payload: any): Promise<FeedbackDocument> {
    return this.feedbackModel.create(payload);
  }

  update(id: string, payload: any) {
    return this.feedbackModel.updateOne({ _id: id }, { $set: payload }).exec();
  }

  delete(id: string): void {
    this.feedbackModel
      .updateOne(
        { _id: id },
        {
          $set: {
            is_deleted: true,
          },
        },
      )
      .exec();
  }
}
