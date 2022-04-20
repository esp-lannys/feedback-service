import { Injectable } from '@nestjs/common';
import * as S3 from 'aws-sdk/clients/s3';
import { IFileUploadService } from './file.service.interface';
import * as crypto from 'crypto';

enum FolderEnum {
  FEEDBACK = 'feedback',
}

interface File {
  Location: string;
  Key: string;
  Bucket: string;
}

const FILE_PERMISSION = 'public-read';

function hashingMd5FileName(filename) {
  return crypto
    .createHash('md5')
    .update(filename + Date.now())
    .digest('hex');
}

@Injectable()
export class FileUploadServiceImplementation implements IFileUploadService {
  private s3: S3;
  constructor() {
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_S3_BUCKET_REGION,
    });
  }

  private uploadFolder(folder: FolderEnum) {
    return folder + '/';
  }

  private uploadS3Bucket(
    file: Express.Multer.File,
    folder: FolderEnum,
  ): Promise<File> {
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key:
        this.uploadFolder(folder) +
        hashingMd5FileName(file.originalname + Date.now()),
      Body: file.buffer,
      ACL: FILE_PERMISSION,
    };
    return this.s3.upload(params).promise();
  }

  public uploadFeedbackImages(file: Express.Multer.File) {
    return this.uploadS3Bucket(file, FolderEnum.FEEDBACK);
  }
}
