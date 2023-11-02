import { Module } from '@nestjs/common';
import { MessageController } from './message.controller';
import { MessageService } from './message.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MessageModel} from "./message.model";

@Module({
  controllers: [MessageController],
  providers: [MessageService],
  imports: [TypeOrmModule.forFeature([MessageModel])]
})
export class MessageModule {}
