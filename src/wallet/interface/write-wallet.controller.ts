import {
	Body,
	Controller,
	HttpCode,
	HttpStatus,
	Post,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { CreateWalletCommand } from './create-wallet-command';
import { CreateWalletDTO } from './create-wallet-dto';

@Controller('write-wallet')
export class WriteWalletController {
	constructor(private readonly commandBus: CommandBus) {}
	@Post()
	@HttpCode(HttpStatus.CREATED)
	async create(@Body() { name, balance, icon }: CreateWalletDTO) {
		return await this.commandBus.execute(
			new CreateWalletCommand(name, balance, icon),
		);
	}
}
