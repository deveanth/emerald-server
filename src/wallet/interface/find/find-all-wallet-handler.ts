import { Injectable } from '@nestjs/common';
import { ServiceReadWallet } from '@wallet/application/service-read-wallet';
import { ReadWalletTypeORM } from '@wallet/infrastructure/read-wallet-typeorm';

@Injectable()
export class FindAllWalletHandler {
	private readonly serviceReadWallet: ServiceReadWallet;

	constructor(private readonly readWalletTypeORM: ReadWalletTypeORM) {
		this.serviceReadWallet = new ServiceReadWallet(this.readWalletTypeORM);
	}

	async execute(): Promise<any> {
		return await this.serviceReadWallet.findAll();
	}
}
