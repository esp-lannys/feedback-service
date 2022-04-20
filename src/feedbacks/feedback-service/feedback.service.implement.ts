import { Inject, Injectable } from '@nestjs/common';
import {
  FilterFeedbackDto,
  CreateFeedbackDto,
  UpdateFeedbackDto,
} from '../feedback-dto/feedback.dto';
import { IFeedbackRepository } from '../feedback-repository/feedback.repository.interface';
import { IFeedbackService } from './feedback.service.interface';
import { v4 as uuidv4 } from 'uuid';
import { Feedbacks } from '@prisma/client';

@Injectable()
export class FeedbackServiceImplementation implements IFeedbackService {
  constructor(
    @Inject(IFeedbackRepository)
    private feedbackRepository: IFeedbackRepository,
  ) {}

  async getFeedbackList(payload: FilterFeedbackDto): Promise<Feedbacks[]> {
    const { limit, offset } = payload;
    const feedbacks = await this.feedbackRepository.findAllByCondition(
      limit,
      offset,
      {},
    );
    return feedbacks;
  }

  getFeedbackDetail(id: string): Promise<Feedbacks> {
    return this.feedbackRepository.findById(id);
  }

  async createFeedback(payload: CreateFeedbackDto): Promise<Feedbacks> {
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
  ): Promise<Feedbacks> {
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
