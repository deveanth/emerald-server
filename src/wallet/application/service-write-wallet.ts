import { WalletObject } from '@wallet/domain/wallet-object';
import { IWriteWalletRepository } from './iwallet-repository';

export class ServiceWriteWallet<E> {
	
	private readonly objectWallet:WalletObject;

	constructor(private readonly walletRepository: IWriteWalletRepository<E>) {
		this.walletRepository = walletRepository;
		this.objectWallet = new WalletObject();
	}

	async createWallet(name: string, balance: number, icon: string): Promise<E> {
		
		return await this.walletRepository.create(
			this.objectWallet.getWallet(name, balance, icon),
		);
	}

	async removeWallet(id?:number,name?:string): Promise<E>{
		this.objectWallet.isExistWallet(id,name);
		return await this.walletRepository.remove(id,name);
	}
}
