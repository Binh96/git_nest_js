import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Friends{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: "user1_id"})
    user1: number;

    @Column({name: "user2_id"})
    user2: number;

    @Column({name: "approve", default: false})
    approve: boolean;

    @Column({name: "status", default: false})
    status: boolean;

    @CreateDateColumn()
    createDate: Date;
}