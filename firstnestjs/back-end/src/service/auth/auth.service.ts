import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; 
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>,
                private jwtService: JwtService
                ){

    }

    public async checkAccount(user: User): Promise<boolean>{
        const userInDb = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        });
        if(userInDb){
            const isMatch = await bcrypt.compare(user.password, userInDb.password);
            return isMatch;
        }
    }

    public getToken(user: User){
        const payload = user;
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
