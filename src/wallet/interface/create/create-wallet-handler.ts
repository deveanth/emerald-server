import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ServiceWriteWallet } from '@wallet/application/service-write-wallet';
import { WriteWalletTypeORM } from '@wallet/infrastructure/write-wallet-typeorm';
import { CreateWalletCommand } from './create-wallet-command';

@CommandHandler(CreateWalletCommand)
export class CreateWalletHandler
	implements ICommandHandler<CreateWalletCommand>
{
	private readonly serviceWriteWallet: ServiceWriteWallet;

	constructor(private readonly writeWalletTypeORM: WriteWalletTypeORM) {
		this.serviceWriteWallet = new ServiceWriteWallet(this.writeWalletTypeORM);
	}

	async execute({name,balance,icon}: CreateWalletCommand): Promise<any> {
		return await this.serviceWriteWallet.createWallet(name, balance, icon);
	}
}
