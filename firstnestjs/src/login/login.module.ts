import { Module } from '@nestjs/common';
import { LoginService } from './service/login/login.service';
import { LoginController } from './controller/login/login.controller';

@Module({
  providers: [LoginService],
  controllers: [LoginController],
})
export class LoginModule {}
