import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ResponseError } from '@utils/response-error';
import { CreateWalletCommand } from './create-wallet-command';
import { CreateWalletDTO } from './create-wallet-dto';

@Controller('wallet')
export class WriteWalletController {
	constructor(private readonly commandBus: CommandBus) {}
	@Post()
	@HttpCode(HttpStatus.OK)
	async create(@Body() { name, balance, icon }: CreateWalletDTO) {
		try {
			return await this.commandBus.execute(
				new CreateWalletCommand(name, balance, icon),
			);
		} catch (error) {
			throw new ResponseError(error);
		}
	}
}
