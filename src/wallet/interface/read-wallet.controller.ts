import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ResponseError } from '@utils/response-error';
import { FindOneWalletQuery } from './find-one/find-one-wallet-query';
import { FindAllWalletHandler } from './find/find-all-wallet-handler';

@Controller('wallet')
export class ReadWalletController {
	constructor(
		private readonly queryBus: QueryBus,
		private readonly queryFindAll: FindAllWalletHandler,
	) {}

	@Get(':id')
	async findOne(@Param('id') id: number) {
		try {
			return await this.queryBus.execute(new FindOneWalletQuery(id));
		} catch (error) {
			throw new ResponseError(error);
		}
	}

	@Get()
	async findAll() {
		try {
			return await this.queryFindAll.execute();
		} catch (error) {
			throw new ResponseError(error);
		}
	}
}
