import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ServiceWriteWallet } from "@wallet/application/service-write-wallet";
import { WriteWalletTypeORM } from "@wallet/infrastructure/write-wallet-typeorm";
import { UpdateWalletCommand } from "./update-wallet-command";


@CommandHandler(UpdateWalletCommand)
export class UpdateWalletHandler implements ICommandHandler<UpdateWalletCommand>{
    private readonly serviceWriteWallet: ServiceWriteWallet;

    constructor(private readonly writeWalletTypeORM: WriteWalletTypeORM) {
		this.serviceWriteWallet = new ServiceWriteWallet(this.writeWalletTypeORM);
	}
    
    async execute({id,name,balance,icon}: UpdateWalletCommand): Promise<any> {
        return await this.serviceWriteWallet.updateWallet(id,name,balance,icon);
    }

    
} 