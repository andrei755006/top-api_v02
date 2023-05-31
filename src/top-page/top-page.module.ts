import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [TopPageController],
  providers: [ConfigService],
})
export class TopPageModule {}
