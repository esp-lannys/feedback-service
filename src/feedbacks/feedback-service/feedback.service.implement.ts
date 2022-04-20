import { Inject, Injectable } from '@nestjs/common';
import { FeedbackModel } from '../../models/Feedbacks';
import {
  FilterFeedbackDto,
  CreateFeedbackDto,
  UpdateFeedbackDto,
} from '../feedback-dto/feedback.dto';
import { IFeedbackRepository } from '../feedback-repository/feedback.repository.interface';
import { IFeedbackService } from './feedback.service.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FeedbackServiceImplementation implements IFeedbackService {
  constructor(
    @Inject(IFeedbackRepository)
    private feedbackRepository: IFeedbackRepository,
  ) {}

  async getFeedbackList(payload: FilterFeedbackDto): Promise<FeedbackModel[]> {
    const { limit, offset } = payload;
    const feedbacks = await this.feedbackRepository.findAllByCondition(
      limit,
      offset,
      {},
    );
    return feedbacks;
  }

  getFeedbackDetail(id: string): Promise<FeedbackModel> {
    return this.feedbackRepository.findById(id);
  }

  async createFeedback(payload: CreateFeedbackDto): Promise<FeedbackModel> {
    const { description, title, images } = payload;
    const params: Record<string, any> = {
      id: uuidv4(),
      description: description,
      title: title,
      images: images,
    };
    const createdFeedback = await this.feedbackRepository.create(params);
    return createdFeedback;
  }

  async updateFeedback(
    id: string,
    payload: UpdateFeedbackDto,
  ): Promise<FeedbackModel> {
    const updatedFeedback = await this.feedbackRepository.update(id, payload);
    return updatedFeedback;
  }

  async deleteFeedback(id: string): Promise<void> {
    const feedback = await this.getFeedbackDetail(id);
    if (!feedback) {
      throw new Error('Feedback not found');
    }
    this.feedbackRepository.delete(id);
  }
}
