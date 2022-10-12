import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('contents/login')
  getHello(@Res() res: Response){
    let temp = this.appService.getHello();
    res.render("contents/login", {temp});
  }
}
