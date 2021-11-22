import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ResponseError } from '@utils/response-error';
import { ServiceWriteWallet } from '@wallet/application/service-write-wallet';
import { WriteWallet } from '@wallet/infrastructure/write-wallet';
import { CreateWalletCommand } from './create-wallet-command';
import { WalletEntity } from '../infrastructure/wallet-entity';

@CommandHandler(CreateWalletCommand)
export class CreateWalletHandler
	implements ICommandHandler<CreateWalletCommand>
{
	private readonly serviceWriteWallet: ServiceWriteWallet<WalletEntity>;

	constructor(private readonly writeWallet: WriteWallet) {
		this.serviceWriteWallet = new ServiceWriteWallet(this.writeWallet);
	}

	async execute(command: CreateWalletCommand) {
		try {
			const { name, balance, icon } = command;
			return await this.serviceWriteWallet.createWallet(
				name,
				balance,
				icon,
			);
		} catch (error) {
			return new ResponseError(error);
		}
	}
}
