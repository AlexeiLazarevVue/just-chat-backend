import { Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {MessageModel} from "./message.model";
import {Repository} from "typeorm";
import {CreateMessageDto} from "./dto/create-message.dto";
import {DeleteMessageDto} from "./dto/delete-message.dto";

@Injectable()
export class MessageService {
    constructor(
        @InjectRepository(MessageModel)
        private messageRepository: Repository<MessageModel>
    ) {}
    async createMessage(dto: CreateMessageDto) {
        try {
            if (dto.content.trim() !== '') {
                const message = new MessageModel()
                message.content = dto.content
                message.userId = dto.userId
                message.username = dto.username
                message.created_at = String(Date.now())
                await message.save()
                return message
            }
        } catch (error) {
            console.log(error)
        }
    }
    async getMessages() {
        try {
            const messages = await this.messageRepository.find()
            return messages
        } catch (error) {
            console.log(error)
        }
    }
    async deleteMessage(messageId, dto: DeleteMessageDto) {
        try {
            console.log(dto.userId)
            const message = await MessageModel.findOneBy({id: messageId})
            if (Number(dto.userId) === message.userId) {
                const deletedMessage = await MessageModel.delete({id: messageId})
                return deletedMessage
            }
            else {
                throw new Error('You are not allowed to do that')
            }
        } catch (error) {
            console.log(error)
        }
    }
}
