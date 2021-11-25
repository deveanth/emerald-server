import { WalletObject } from '@wallet/domain/wallet-object';
import { IReadWalletRepository } from './iread-walled-repository';

export class ServiceReadWallet {
	private readonly objectWallet: WalletObject;

	constructor(private readonly walletRepository: IReadWalletRepository) {
		this.walletRepository = walletRepository;
		this.objectWallet = new WalletObject();
	}

	async findOne(id: number): Promise<any> {
		this.objectWallet.isExistWallet(id);
		return await this.walletRepository.findOne(id);
	}

	async findAll(): Promise<any> {
		return await this.walletRepository.findAll();
	}
}
