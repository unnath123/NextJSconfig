import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class UserModule {
    constructor(private readonly configServie : ConfigService){
        console.log(configServie.get<Number>("PORT"))
    }
}
