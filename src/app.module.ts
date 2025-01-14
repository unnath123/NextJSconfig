import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';


@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".prod.env"
    //envFilePath: ".local.env"
  }), UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
