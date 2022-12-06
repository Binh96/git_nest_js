import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/user';
import { InforUser } from './model/inforUser';
import { LoginController } from './controller/login/login.controller';
import { SignUpController } from './controller/sign-up/sign-up.controller';
import { SignUpService } from './service/sign-up/sign-up.service';
import { AuthService } from './service/auth/auth.service';
import { EntityModule } from './model/entity.module';
import { GroupChat } from './model/group';
import { Friends } from './model/friends';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from './utils/auth-utils/auth.module';
import { JwtConstant } from './utils/auth-utils/auth';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'login',
      entities: [User, InforUser, GroupChat, Friends],
      synchronize: true,
    }),
    JwtModule.register({
      secret: JwtConstant.secret,
      signOptions: {
        expiresIn: '120s'
      }
    }),
    EntityModule,
    AuthModule
  ],
  controllers: [AppController, LoginController, SignUpController],
  providers: [AppService, SignUpService, AuthService],
})
export class AppModule {}
