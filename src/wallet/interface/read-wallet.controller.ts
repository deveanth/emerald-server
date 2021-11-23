import { Body, Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ResponseError } from '@utils/response-error';
import { FindOneWalletDTO } from './find-one/find-one-wallet-dto';
import { FindOneWalletQuery } from './find-one/find-one-wallet-query';


@Controller('wallet')
export class ReadWalletController {
	constructor(private readonly queryBus: QueryBus) {}

	@Get()
	async findOne(@Body() { id, name }: FindOneWalletDTO) {
		try {
			return await this.queryBus.execute(new FindOneWalletQuery(id, name));
		} catch (error) {
			throw new ResponseError(error);
		}
	}
}
