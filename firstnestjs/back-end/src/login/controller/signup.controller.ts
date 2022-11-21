import { Body, Controller, Get, Post, Render, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDto } from '../dto/userDto';
import { InforUser } from '../model/inforUser';
import { User } from '../model/user.entity';
import { SignupService } from '../service/signup/signup.service';

@Controller("/sign-up")
export class SignupController {

    constructor(private signupService: SignupService){
        
    }

    @Post()
    public async signUp(@Body() userDto: UserDto){
        const user = new User();
        const inforUser = new InforUser(userDto.city, userDto.dob);
        user.password = userDto.password;
        user.username = userDto.username;
        await this.signupService.createAccount(user, inforUser);
    }   

}
