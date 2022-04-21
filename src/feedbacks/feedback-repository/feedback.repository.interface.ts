import { FeedbackDocument } from '../../models/Feedbacks';

export interface IFeedbackRepository {
  findAll(): Promise<FeedbackDocument[]>;
  findAllByCondition(limit: number, offset: number, condition: any): Promise<FeedbackDocument[]>;
  findById(id: string): Promise<FeedbackDocument>;
  create(payload: any): Promise<FeedbackDocument>;
  update(id: string, payload: any): Promise<any>;
  delete(id: string): void;
}

export const IFeedbackRepository = Symbol('IFeedbackRepository');