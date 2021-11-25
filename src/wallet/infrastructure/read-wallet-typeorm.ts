import { Injectable } from '@nestjs/common';
import { IReadWalletRepository } from '@wallet/application/iread-walled-repository';
import { WalletEntity } from './wallet-entity';
import { WalletEntityError } from './wallet-entity-error';
import { WalletRepository } from './wallet-repository';

@Injectable()
export class ReadWalletTypeORM implements IReadWalletRepository {
	constructor(private readonly walletRepository: WalletRepository) {}

	async findOne(id: number): Promise<any> {
		let walletEntity: WalletEntity = await this.walletRepository.findOne(id);
		if (!walletEntity) {
			throw new WalletEntityError();
		}
		return walletEntity;
	}

	findAll(): Promise<any> {
		return this.walletRepository.find();
	}
}
