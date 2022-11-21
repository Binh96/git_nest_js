import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InforUser } from 'src/login/model/inforUser';
import { User } from 'src/login/model/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SignupService {

    constructor(@InjectRepository(User) private userRepository: Repository<User>, 
                @InjectRepository(InforUser) private inforUserRepository: Repository<InforUser>) {
    }
    /**
     *  This func used for create new account
     *  @param account 
     */
    public async createAccount(account: User, inforUser: InforUser){
        if(this.checkAcountHasExist){
            await this.userRepository.save(account);
            await this.inforUserRepository.save(inforUser);
        }
        else{
            console.log("Error because user has exist!");
        }
    }

    public async checkAcountHasExist(account: User): Promise<User>{
        const entityUser = this.userRepository.findOne({
            where: {
                username: account.username
            }
        });
        return entityUser;
    }
}
