import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity({name: "infor_user"})
export class InforUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'city'})
    city: string;

    @Column({name: 'date_of_birth', type: 'date'})
    dob: string;

    @OneToOne(() => User, (user) => user.username)
    @JoinColumn()
    user: User;
    

    constructor(city: string, dob: string){
        this.city = city;
        this.dob = dob;
    }
}