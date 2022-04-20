import { FeedbackModel } from '../../models/Feedbacks';

export interface IFeedbackRepository {
  findAll(): Promise<FeedbackModel[]>;
  findAllByCondition(limit: number, offset: number, condition: any): Promise<FeedbackModel[]>;
  findById(id: string): Promise<FeedbackModel>;
  create(payload: any): Promise<FeedbackModel>;
  update(id: string, payload: any): Promise<any>;
  delete(id: string): void;
}

export const IFeedbackRepository = Symbol('IFeedbackRepository');