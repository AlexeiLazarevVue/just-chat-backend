import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MessageModule } from './messages/message.module';

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
      MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
