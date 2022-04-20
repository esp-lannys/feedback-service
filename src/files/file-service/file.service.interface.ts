export interface IFileUploadService {
    uploadFeedbackImages(file: any): any;
}

export const IFileUploadService = Symbol('IFileUploadService');