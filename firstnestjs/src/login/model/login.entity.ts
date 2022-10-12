import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'user_name'})
    username: string;

    @Column({name: 'password'})
    password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}