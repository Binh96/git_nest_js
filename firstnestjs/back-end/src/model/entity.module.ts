import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Friends } from './friends';
import { GroupChat } from './group';
import { InforUser } from './inforUser';
import { User } from './user';

@Module({
    imports: [
        TypeOrmModule.forFeature([InforUser, 
                                  User,
                                  GroupChat,
                                  Friends ])
    ],
    exports: [
        TypeOrmModule
    ]
})
export class EntityModule {}
