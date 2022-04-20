import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BaseController } from '../../base.controller';
import { IFeedbackService } from '../feedback-service/feedback.service.interface';
import * as express from 'express';
import {
  CreateFeedbackDto,
  FilterFeedbackDto,
  UpdateFeedbackDto,
} from '../feedback-dto/feedback.dto';
import { Result } from '../../results/Result';

@ApiTags('Feedbacks')
@Controller('/feedbacks')
export class FeedbackController extends BaseController {
  constructor(
    @Inject(IFeedbackService)
    private readonly feedbackService: IFeedbackService,
  ) {
    super();
  }

  @Get()
  @ApiOperation({ summary: 'Get All Feedbacks' })
  async getAllFeedbacks(
    @Res() response: express.Response,
    @Query() getFeedbacksDto: FilterFeedbackDto,
  ) {
    try {
      const feedbacks = await this.feedbackService.getFeedbackList(
        getFeedbacksDto,
      );
      const result = Result.ok({
        statusCode: HttpStatus.OK,
        data: feedbacks,
      });
      return this.ok(response, result.value);
    } catch (error) {
      const err = Result.fail({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
      return this.fail(response, err.error);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get Feedback Detail' })
  async getFeedbackDetail(
    @Res() response: express.Response,
    @Param('id') feedbackId: string,
  ) {
    try {
      const feedback = await this.feedbackService.getFeedbackDetail(feedbackId);
      const result = Result.ok({
        statusCode: HttpStatus.OK,
        data: feedback,
      });
      return this.ok(response, result.value);
    } catch (error) {
      const err = Result.fail({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
      return this.fail(response, err.error);
    }
  }

  @Post()
  @ApiOperation({ summary: 'Create Feedback' })
  async createNewFeedback(
    @Res() response: express.Response,
    @Body() createFeedbackDto: CreateFeedbackDto,
  ) {
    try {
      const createdFeedback = await this.feedbackService.createFeedback(
        createFeedbackDto,
      );
      const result = Result.ok({
        statusCode: HttpStatus.OK,
        data: createdFeedback,
      });
      return this.ok(response, result.value);
    } catch (error) {
      const err = Result.fail({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
      return this.fail(response, err.error);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update Feedback' })
  async updateFeedback(
    @Res() response: express.Response,
    @Body() updateFeedbackDto: UpdateFeedbackDto,
    @Param('id') feedbackId: string,
  ) {
    try {
      const updatedFeedback = await this.feedbackService.updateFeedback(
        feedbackId,
        updateFeedbackDto,
      );
      const result = Result.ok({
        statusCode: HttpStatus.OK,
        data: updatedFeedback,
      });
      return this.ok(response, result.value);
    } catch (error) {
      const err = Result.fail({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
      return this.fail(response, err.error);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete A Feedback' })
  async deleteFeedback(
    @Res() response: express.Response,
    @Param('id') feedbackId: string,
  ) {
    try {
      await this.feedbackService.deleteFeedback(feedbackId);
      const result = Result.ok({
        statusCode: HttpStatus.OK,
        message: 'Successfully deleted a feedback',
      });
      return this.ok(response, result.value);
    } catch (error) {
      const err = Result.fail({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
      return this.fail(response, err.error);
    }
  }
}
