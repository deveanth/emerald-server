import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { Instance } from 'chalk';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);
	const port = configService.get<number>('Environment.port');
	await app.listen(port);
	const customChalk = new Instance();
	Logger.log(
		`${customChalk.hex('#00F50F ').bold('Emerald running')}  ${customChalk
			.hex('#D38BFF')
			.bold(`http://localhost:${port}/`)} 💥`,
		'Server',
	);
}

bootstrap();
