import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CreateMessageDto} from "./dto/create-message.dto";
import {MessageService} from "./message.service";
import {DeleteMessageDto} from "./dto/delete-message.dto";

@Controller('/api')
export class MessageController {
    constructor(
        private messageService: MessageService
    ) {
    }
    @Post('/messages')
    async createMessage(@Body() messageDto: CreateMessageDto) {
        const message = await this.messageService.createMessage(messageDto)
        return message
    }
    @Get('/messages')
    async getMessages() {
        const messages = await this.messageService.getMessages()
        return messages
    }
    @Delete('/message/:id')
    async deleteMessage(@Param('id') id, @Body() deleteMessageDto: DeleteMessageDto) {
        const message = await this.messageService.deleteMessage(id, deleteMessageDto)
        return message
    }
}
