import { Wallet } from '../domain/wallet';

export interface IWriteWalletRepository {
	create(wallet: Wallet): Promise<any>;
}
