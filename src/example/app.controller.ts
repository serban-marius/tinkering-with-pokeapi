import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import AppService from './app.service';

@Controller()
class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('Basic Get Method')
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

export default AppController;
