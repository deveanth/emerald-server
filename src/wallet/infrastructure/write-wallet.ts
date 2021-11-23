import { Injectable } from '@nestjs/common';
import { Wallet } from '@wallet/domain/wallet';
import { IWriteWalletRepository } from '@wallet/application/iwallet-repository';
import { WalletEntity } from './wallet-entity';
import { WalletRepository } from './wallet-repository';

@Injectable()
export class WriteWallet implements IWriteWalletRepository<WalletEntity> {
	constructor(private readonly walletRepository: WalletRepository) {}

	async create({ name, balance, icon }: Wallet) {
		const walletEntity = this.walletRepository.create();
		walletEntity.name = name;
		walletEntity.balance = balance;
		walletEntity.icon = icon;
		return await this.walletRepository.save(walletEntity);
	}
}
