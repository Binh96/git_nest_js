import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { GroupChat } from "./group";
import { User } from "./user";

@Entity({name: "infor_user"})
export class InforUser{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'city'})
    city: string;

    @Column({name: 'date_of_birth', type: 'date'})
    dob: string;

    @OneToOne(() => User, (user) => user.inforUser)
    @JoinColumn({name: "user", referencedColumnName: "id"})
    user: User;

    @OneToMany(() => GroupChat, (groupChat) => groupChat.id)
    groupChat: GroupChat[];
}