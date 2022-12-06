import { Module } from '@nestjs/common';
import { LoginController } from './login/login.controller';
import { SignUpController } from './sign-up/sign-up.controller';

@Module({
    imports: [

    ],
    controllers: [SignUpController, LoginController]
})
export class Controller{
}