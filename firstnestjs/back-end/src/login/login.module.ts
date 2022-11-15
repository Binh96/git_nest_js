import { Module } from '@nestjs/common';
import { LoginService } from './service/login/login.service';
import { LoginController } from './controller/login.controller';
import { SignupController } from './controller/signup.controller';
import { SignupService } from './service/signup/signup.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [LoginService, SignupService],
  controllers: [LoginController, SignupController],
})
export class LoginModule {}
