import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserModule} from "./users/user.module";
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Password',
      database: 'just-chat',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
      UserModule,
      MessagesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
