import { BeforeInsert, Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { InforUser } from "./inforUser";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_name'})
    username: string;

    @Column({name: 'password'})
    password: string;

    @OneToOne(() => InforUser, (inforUser) => inforUser.user, {cascade: true})
    inforUser: InforUser;

    @BeforeInsert()
    async setPassword(password: string){
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(password || this.password, salt);
    }
}