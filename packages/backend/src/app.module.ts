import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './item/item.controller';
import { ItemService } from './item/item.service';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from './item/entities/item.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ItemModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'feedlify',
      entities: [Item],
      synchronize: true,
    }),
    AuthModule.forRoot({
      // https://try.supertokens.com is for demo purposes. Replace this with the address of your core instance (sign up on supertokens.com), or self host a core.
      connectionURI:
        'https://st-dev-6acecd30-1cde-11ef-ac0d-910b1b87b302.aws.supertokens.io',
      apiKey: 'uicjurk3bLR22LRrams4p5a5PP',
      appInfo: {
        // Learn more about this on https://supertokens.com/docs/session/appinfo
        appName: 'Feedlify',
        apiDomain: 'http://localhost:3000',
        websiteDomain: 'http://localhost:6006',
        apiBasePath: '/auth',
        websiteBasePath: '/auth',
      },
    }),
  ],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
