import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';

@Module({
  controllers: [AuthController],
  imports: [
	TypegooseModule.forFeature([
		{
		typegooseClass: AuthModule,
		schemaOptions: {
			collection: 'Auth'
		}
		}
	])
  ]
})
export class AuthModule {}
