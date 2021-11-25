import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ServiceReadWallet } from '@wallet/application/service-read-wallet';
import { ReadWalletTypeORM } from '@wallet/infrastructure/read-wallet-typeorm';
import { FindOneWalletQuery } from './find-one-wallet-query';

@QueryHandler(FindOneWalletQuery)
export class FindOneWalletHandler implements IQueryHandler<FindOneWalletQuery> {
	private readonly serviceReadWallet: ServiceReadWallet;

	constructor(private readonly readWalletTypeORM: ReadWalletTypeORM) {
		this.serviceReadWallet = new ServiceReadWallet(this.readWalletTypeORM);
	}

	async execute({ id }: FindOneWalletQuery): Promise<any> {
		return await this.serviceReadWallet.findOne(id);
	}
}
