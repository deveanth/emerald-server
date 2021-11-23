import { Wallet } from '../domain/wallet';

export interface IWriteWalletRepository<E> {
	create(wallet: Wallet): Promise<E>;

	remove(id?:number,name?:string): Promise<E>;
}


