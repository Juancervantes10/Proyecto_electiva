import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'The best team in F1, Oracle Redbull Racing';
  }

  @Post('users')
  createUser(@Body() payload: any) {
    return {
      message: 'Creacion de usuario',
      payload,
    };
  }


}