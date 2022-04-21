import { FeedbackDocument } from "../../models/Feedbacks";
import { CreateFeedbackDto, FilterFeedbackDto, UpdateFeedbackDto } from "../feedback-dto/feedback.dto";

export interface IFeedbackService {
    getFeedbackList(payload: FilterFeedbackDto): Promise<FeedbackDocument[]>
    getFeedbackDetail(id: string): Promise<FeedbackDocument>
    createFeedback(payload: CreateFeedbackDto): Promise<FeedbackDocument>
    updateFeedback(id: string, payload: UpdateFeedbackDto): Promise<FeedbackDocument>
    deleteFeedback(id: string): Promise<void>
}

export const IFeedbackService = Symbol('IFeedbackService');