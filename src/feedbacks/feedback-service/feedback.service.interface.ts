import { FeedbackModel } from "../../models/Feedbacks";
import { CreateFeedbackDto, FilterFeedbackDto, UpdateFeedbackDto } from "../feedback-dto/feedback.dto";

export interface IFeedbackService {
    getFeedbackList(payload: FilterFeedbackDto): Promise<FeedbackModel[]>
    getFeedbackDetail(id: string): Promise<FeedbackModel>
    createFeedback(payload: CreateFeedbackDto): Promise<FeedbackModel>
    updateFeedback(id: string, payload: UpdateFeedbackDto): Promise<FeedbackModel>
    deleteFeedback(id: string): Promise<void>
}

export const IFeedbackService = Symbol('IFeedbackService');