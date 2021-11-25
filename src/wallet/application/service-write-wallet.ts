import { WalletObject } from '@wallet/domain/wallet-object';
import { IWriteWalletRepository } from './iwrite-wallet-repository';

export class ServiceWriteWallet {
	
	private readonly objectWallet:WalletObject;

	constructor(private readonly walletRepository: IWriteWalletRepository) {
		this.walletRepository = walletRepository;
		this.objectWallet = new WalletObject();
	}

	async createWallet(name: string, balance: number, icon: string): Promise<any> {
		
		return await this.walletRepository.create(
			this.objectWallet.getWallet(name, balance, icon),
		);
	}

	async removeWallet(id:number): Promise<any>{
		this.objectWallet.isExistWallet(id);
		return await this.walletRepository.remove(id);
	}
	
	async updateWallet(id:number,name?:string,balance?:number,icon?:string): Promise<any>{
		this.objectWallet.isExistWallet(id);
		this.objectWallet.getWallet(name,balance,icon);
		return await this.walletRepository.update(id,name,balance,icon);
	}
}
