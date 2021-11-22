import { WalletObject } from '@wallet/domain/wallet-object';
import { IWriteWalletRepository } from './iwallet-repository';

export class ServiceWriteWallet<E> {
	constructor(private readonly walletRepository: IWriteWalletRepository) {
		this.walletRepository = walletRepository;
	}

	async createWallet(
		name: string,
		balance: number,
		icon: string,
	) {
		const objectWallet = new WalletObject();
		return await this.walletRepository.create(
			objectWallet.getWallet(name, balance, icon),
		);
	}
}