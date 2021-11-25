import {
	Body,
	Controller,
	Delete,
	HttpCode,
	HttpStatus,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ResponseError } from '@utils/response-error';
import { CreateWalletCommand } from './create/create-wallet-command';
import { CreateWalletDTO } from './create/create-wallet-dto';
import { RemoveWalletCommand } from './remove/remove-wallet-command';
import { UpdateWalletCommand } from './update/update-wallet-command';
import { UpdateWalletDTO } from './update/update-wallet-dto';

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

	@Delete(':id')
	@HttpCode(HttpStatus.OK)
	async remove(@Param('id') id: number) {
		try {
			return await this.commandBus.execute(new RemoveWalletCommand(id));
		} catch (error) {
			throw new ResponseError(error);
		}
	}

	@Put()
	@HttpCode(HttpStatus.OK)
	async update(@Body() { id, name, balance, icon }: UpdateWalletDTO) {
		try {
			return await this.commandBus.execute(
				new UpdateWalletCommand(id, name, balance, icon),
			);
		} catch (error) {
			throw new ResponseError(error);
		}
	}
}
