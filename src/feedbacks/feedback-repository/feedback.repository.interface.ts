import { Feedbacks, PrismaPromise } from "@prisma/client";


export interface IFeedbackRepository {
  findAll(): Promise<Feedbacks[]>;
  findAllByCondition(limit: number, offset: number, condition: any): Promise<Feedbacks[]>;
  findById(id: string): Promise<Feedbacks>;
  create(payload: any): Promise<Feedbacks>;
  update(id: string, payload: any): Promise<any>;
  delete(id: string): void;
}

export const IFeedbackRepository = Symbol('IFeedbackRepository');