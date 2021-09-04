import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { PublicationController } from './controllers/publication/publication.controller';
import { PublicationService } from './services/publication/publication.service';
import { UserService } from './services/user/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController, PublicationController],
  providers: [AppService, PublicationService, UserService],
})
export class AppModule {}
