import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Login {
    @PrimaryGeneratedColumn()
    id: number;
}