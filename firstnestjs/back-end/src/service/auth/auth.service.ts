import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/model/user';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'; 

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>){

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
        return false;
    }
}
