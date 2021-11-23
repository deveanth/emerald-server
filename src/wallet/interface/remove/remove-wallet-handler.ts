import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ServiceWriteWallet } from '@wallet/application/service-write-wallet';
import { WalletEntity } from '@wallet/infrastructure/wallet-entity';
import { WriteWalletTypeORM } from '@wallet/infrastructure/write-wallet-typeorm';
import { RemoveWalletCommand } from './remove-wallet-command';

@CommandHandler(RemoveWalletCommand)
export class RemoveWalletHandler implements ICommandHandler<RemoveWalletCommand>{
    private readonly serviceWriteWallet: ServiceWriteWallet<WalletEntity>;

    constructor(private readonly writeWalletTypeORM: WriteWalletTypeORM) {
		this.serviceWriteWallet = new ServiceWriteWallet(this.writeWalletTypeORM);
	}

    async execute({id,name}: RemoveWalletCommand): Promise<WalletEntity> {
        return await this.serviceWriteWallet.removeWallet(id,name);
    }
}