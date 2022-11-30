import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class GroupChat{
    @PrimaryGeneratedColumn()
    id: number;

    @PrimaryColumn()
    @Column({name: "group_name"})
    groupName: string;

    @ManyToOne(() => User, (member) => member.id)
    @JoinColumn({name: "user_id", referencedColumnName: "id"})
    memberId: User[];

    @CreateDateColumn({name: "create_date"})
    createDate: Date;

    @UpdateDateColumn({name: "update_date"})
    updateDate: Date;
}