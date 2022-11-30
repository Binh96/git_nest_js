import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from 'src/model/user';
import { AuthService } from 'src/service/auth/auth.service';

@Controller('login')
export class LoginController {

    constructor(private authService: AuthService){

    }

    /**
     * This func use for authentication when user request login
     * @param user 
     * @param res 
     */
    @Post("")
    public async login(@Body() user: User, @Res() res: Response){
        const status = await this.authService.checkAccount(user);
        if(status){
            res.setHeader('Content-Type', 'Application/json');
            res.status(HttpStatus.OK).send({
                "message": "You can access this site!",
                "status": status
            });
        }
        else{
            res.setHeader('Content-Type', 'Application/json');
            res.status(HttpStatus.FORBIDDEN).send({
                "message": "You need to check your account",
                "status": status
            });
        }
    }
}
