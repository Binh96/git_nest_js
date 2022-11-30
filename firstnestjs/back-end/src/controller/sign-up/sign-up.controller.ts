import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UserDto } from 'src/dto/userDto';
import { SignUpService } from 'src/service/sign-up/sign-up.service';

@Controller('/sign-up')
export class SignUpController {
    constructor(private signupService: SignUpService){
        
    }

    @Post()
    public async signUp(@Body() userDto: UserDto,
                        @Res() res: Response){
        const result = await this.signupService.createAccount(userDto);
        if(result){
            res.status(HttpStatus.OK).send();
        }
        else{
            res.status(HttpStatus.BAD_REQUEST).send();
        }
    } 
}
