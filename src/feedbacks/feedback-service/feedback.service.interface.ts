import { Feedbacks } from "@prisma/client";
import { CreateFeedbackDto, FilterFeedbackDto, UpdateFeedbackDto } from "../feedback-dto/feedback.dto";

export interface IFeedbackService {
    getFeedbackList(payload: FilterFeedbackDto): Promise<Feedbacks[]>
    getFeedbackDetail(id: string): Promise<Feedbacks>
    createFeedback(payload: CreateFeedbackDto): Promise<Feedbacks>
    updateFeedback(id: string, payload: UpdateFeedbackDto): Promise<Feedbacks>
    deleteFeedback(id: string): Promise<void>
}

export const IFeedbackService = Symbol('IFeedbackService');