import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/login/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignupService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    }
    /**
     *  This func used for create new account
     * @param account 
     */
    public createAccount(account: User){
        this.userRepository.save(account);
    }
}
