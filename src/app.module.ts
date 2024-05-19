import { Module } from '@nestjs/common';
import { UsersController } from './users.controller'
import { AlbumbsController } from './albums.controller'

@Module({
  controllers: [UsersController, AlbumbsController],
})
export class AppModule { }
