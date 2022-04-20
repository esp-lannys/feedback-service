import * as express from 'express';
import { Controller, Res, Get, HttpStatus } from '@nestjs/common';
import { BaseController } from './base.controller';

@Controller('/app')
export class AppController extends BaseController {

  @Get('/health')
  async healthCheck(@Res() response: express.Response) {
    return this.ok(response, {
      statusCode: HttpStatus.OK,
      message: 'OK',
    });
  }

  @Get()
  async sayHi(@Res() response: express.Response) {
    return this.ok(response, {
      statusCode: HttpStatus.OK,
      message: 'Hi, this is Feedback Service',
    });
  }
}
