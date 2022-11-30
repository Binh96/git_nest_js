import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/dto/userDto';
import { InforUser } from 'src/model/inforUser';
import { User } from 'src/model/user';
import { Repository } from 'typeorm';

@Injectable()
export class SignUpService {
    
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {

    }
    /**
     *  This func used for create new account
     *  @param userDto 
     */
    public async createAccount(userDto: UserDto): Promise<boolean>{
        if(this.checkAcountHasExist){
            const inforUser = new InforUser();
            inforUser.dob = userDto.dob;
            inforUser.city = userDto.city;
            const user = new User();
            user.username = userDto.username;
            user.password = userDto.password;
            user.inforUser = inforUser;
            await this.userRepository.save(user);
            return true;
        }
        else{
            console.log("Error because user has exist!");
            return false;
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
