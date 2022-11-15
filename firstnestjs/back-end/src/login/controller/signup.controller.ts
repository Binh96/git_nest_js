import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../model/user.entity';
import { SignupService } from '../service/signup/signup.service';

@Controller("/sign-up")
export class SignupController {

    constructor(private signupService: SignupService){
        
    }

    @Get()
    @Render('contents/signup')
    public homeSignUp(res: Response){
    }

    @Post()
    public async signUp(@Body() user: User){
        await this.signupService.createAccount(user);
    }   

}
