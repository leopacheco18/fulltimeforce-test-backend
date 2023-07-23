import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitsModule } from './commits/commits.module';
import { ConfigModule } from '@nestjs/config'
import config from './config';

@Module({
  imports: [CommitsModule, ConfigModule.forRoot({
    envFilePath: '.env',
    load: [config],
    isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
