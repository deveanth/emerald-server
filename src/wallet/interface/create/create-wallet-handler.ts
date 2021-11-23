import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ServiceWriteWallet } from '@wallet/application/service-write-wallet';
import { WriteWalletTypeORM } from '@wallet/infrastructure/write-wallet-typeorm';
import { CreateWalletCommand } from './create-wallet-command';
import { WalletEntity } from '../../infrastructure/wallet-entity';

@CommandHandler(CreateWalletCommand)
export class CreateWalletHandler
	implements ICommandHandler<CreateWalletCommand>
{
	private readonly serviceWriteWallet: ServiceWriteWallet<WalletEntity>;

	constructor(private readonly writeWalletTypeORM: WriteWalletTypeORM) {
		this.serviceWriteWallet = new ServiceWriteWallet(this.writeWalletTypeORM);
	}

	async execute({name,balance,icon}: CreateWalletCommand): Promise<WalletEntity> {
		return await this.serviceWriteWallet.createWallet(name, balance, icon);
	}
}
