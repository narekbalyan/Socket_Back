import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('a')
  getA(): string {
    return '1212389798231231233';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
