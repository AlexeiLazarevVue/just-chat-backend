import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class MessageModel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    content: string

    @Column()
    created_at: string

    @Column()
    userId: number

    @Column()
    username: string
}