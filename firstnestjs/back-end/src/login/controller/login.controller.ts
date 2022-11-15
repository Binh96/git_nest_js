import { Body, Controller, Get, Post, Render, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginService } from 'src/login/service/login/login.service';
import { User } from '../model/user.entity';

@Controller()
export class LoginController {

    constructor(private loginService: LoginService){

    }

    @Get()
    @Render('contents/login')
    public homeLogin(res: Response, req: Request){

    }

    @Post()
    public async login(@Body() user: User, @Res() res: Response){
        const status = await this.loginService.checkAccount(user);
        if(status){
            res.render("contents/home");
        }
        else{
            res.status(401).send("Something goes wrong with you account, please check your account!");
        }
    }

}
