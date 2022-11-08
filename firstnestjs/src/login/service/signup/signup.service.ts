import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/login/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignupService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }
    /**
     *  This func used for create new account
     *  @param account 
     */
    public async createAccount(account: User){
        const user = new User();
        user.username = account.username;
        user.password = account.password;
        await this.userRepository.save(user);
    }
}
