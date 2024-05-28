import { Controller, Get, Session, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { SessionContainer } from 'supertokens-node/recipe/session';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(new AuthGuard())
  getHello(@Session() session: SessionContainer): string {
    const userId = session.getUserId();
    console.log(userId);
    return this.appService.getHello();
  }
}
