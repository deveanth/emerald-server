import { Injectable } from "@nestjs/common";
import { IWriteWalletRepository } from "@wallet/application/iwrite-wallet-repository";
import { Wallet } from "@wallet/domain/wallet";
import { WalletEntity } from "./wallet-entity";
import { WalletEntityError } from "./wallet-entity-error";
import { WalletRepository } from "./wallet-repository";


@Injectable()
export class WriteWalletTypeORM
	implements IWriteWalletRepository
{
	constructor(private readonly walletRepository: WalletRepository) {}
	
	

	async create({ name, balance, icon }: Wallet) {
		const walletEntity: WalletEntity = this.walletRepository.create();
		walletEntity.name = name;
		walletEntity.balance = balance;
		walletEntity.icon = icon;
		return await this.walletRepository.save(walletEntity);
	}

	async remove(id?: number, name?: string): Promise<any> {
		let walletEntity: WalletEntity = await this.walletRepository.findOne(id);
		if(!walletEntity){
			walletEntity = await this.walletRepository.findOne({name});
		}
		
		if (!walletEntity) {
			throw new WalletEntityError();
		}
		
		await this.walletRepository.remove(walletEntity);
		return walletEntity;
	}

	async update(id: number, name?: string, balance?: number, icon?: string): Promise<any> {
		let walletEntity:WalletEntity = await this.walletRepository.findOne(id);
		if(!walletEntity){
			throw new WalletEntityError();
		}
		walletEntity.name = name;
		walletEntity.balance = balance;
		walletEntity.icon = icon;

		return await this.walletRepository.save(walletEntity);
	}

}
