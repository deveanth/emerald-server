import { registerAs } from '@nestjs/config';

export default registerAs('Environment', () => ({
	port: process.env.PORT,
}));

