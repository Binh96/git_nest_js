import { Injectable } from '@nestjs/common';
import { User } from 'src/login/model/user.entity';
import * as bcrypt from 'bcrypt'; 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoginService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){

    }
    
    public async checkAccount(user: User): Promise<boolean>{
        const userInDb = await this.userRepository.findOne({
            where: {
                username: user.username
            }
        });
        const isMatch = await bcrypt.compare(user.password, userInDb.password);
        return isMatch;
    }
}
