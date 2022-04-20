import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FeedbackModel } from '../../models/Feedbacks';
import { IFeedbackRepository } from './feedback.repository.interface';

@Injectable()
export class FeedbackRepositoryImplementation implements IFeedbackRepository {
  constructor(
    @InjectModel(FeedbackModel) private feedbackModel: typeof FeedbackModel,
  ) {}

  findAll(): Promise<FeedbackModel[]> {
    return this.feedbackModel.findAll({
      where: {
        is_deleted: false,
      },
      order: [['created_at', 'desc']],
    });
  }

  findAllByCondition(
    limit: number,
    offset: number,
    condition: any,
  ): Promise<FeedbackModel[]> {
    return this.feedbackModel.findAll({
      limit: limit,
      offset: offset,
      where: {
        ...condition,
        is_deleted: false,
      },
      order: [['created_at', 'desc']],
    });
  }

  findById(id: string): Promise<FeedbackModel> {
    return this.feedbackModel.findOne({
      where: {
        id: id,
      },
    });
  }

  create(payload: any): Promise<FeedbackModel> {
    return this.feedbackModel.create(payload);
  }

  update(id: string, payload: any): Promise<any> {
    return this.feedbackModel.update(payload, {
      where: {
        id: id,
      },
    });
  }

  delete(id: string): void {
    this.feedbackModel.update(
      { is_deleted: true },
      {
        where: {
          id: id,
        },
      },
    );
  }
}
