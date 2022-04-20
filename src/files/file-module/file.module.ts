import { Module } from "@nestjs/common";
import { FileUploadServiceImplementation } from "../file-service/file.service.implementation";
import { IFileUploadService } from "../file-service/file.service.interface";

@Module({
    providers: [
        {
            provide: IFileUploadService,
            useClass: FileUploadServiceImplementation
        }
    ],
})
export class FileModule {}