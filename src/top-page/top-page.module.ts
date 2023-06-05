import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { TopPageModel } from './top-page.model';

@Module({
  imports: [
	ConfigModule,
		TypegooseModule.forFeature([
		{
		typegooseClass: TopPageModel,
		schemaOptions: {
			collection: 'TopPage'
		}
		}
	])
  ],
  controllers: [TopPageController],
  providers: [ConfigService],
})
export class TopPageModule {}
