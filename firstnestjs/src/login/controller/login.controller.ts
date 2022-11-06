import { Controller, Get, Render } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginService } from 'src/login/service/login/login.service';

@Controller('login')
export class LoginController {

    constructor(private loginService: LoginService){

    }

    @Get()
    @Render('contents/login')
    public homeLogin(res: Response, req: Request){

    }

}
