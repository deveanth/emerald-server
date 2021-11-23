import { Body, Controller, Delete, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ResponseError } from '@utils/response-error';
import { CreateWalletCommand } from './create/create-wallet-command';
import { CreateWalletDTO } from './create/create-wallet-dto';
import { RemoveWalletCommand } from './remove/remove-wallet-command';
import { RemoveWalletDTO } from './remove/remove-wallet-dto';

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

	@Delete()
	@HttpCode(HttpStatus.OK)
	async remove(@Body() {id,name}: RemoveWalletDTO){
		try{
			return await this.commandBus.execute(new RemoveWalletCommand(id,name));
		}catch(error){
			throw new ResponseError(error);
		}
	}

}
