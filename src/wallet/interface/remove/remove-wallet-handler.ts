import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ServiceWriteWallet } from '@wallet/application/service-write-wallet';
import { WriteWalletTypeORM } from '@wallet/infrastructure/write-wallet-typeorm';
import { RemoveWalletCommand } from './remove-wallet-command';

@CommandHandler(RemoveWalletCommand)
export class RemoveWalletHandler implements ICommandHandler<RemoveWalletCommand>{
    private readonly serviceWriteWallet: ServiceWriteWallet;

    constructor(private readonly writeWalletTypeORM: WriteWalletTypeORM) {
		this.serviceWriteWallet = new ServiceWriteWallet(this.writeWalletTypeORM);
	}

    async execute({id,name}: RemoveWalletCommand): Promise<any> {
        return await this.serviceWriteWallet.removeWallet(id,name);
    }
}