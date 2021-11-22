import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Environment from '@setting/environment-config';

@Module({
	imports: [
		ConfigModule.forRoot({
			envFilePath: '.env.development',
			load: [Environment],
		}),
	],
	exports: [ConfigModule],
	providers: [],
})
export class SettingModule {}
