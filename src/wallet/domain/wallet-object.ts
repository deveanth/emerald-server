import { Wallet } from './wallet';
import { WalletError, WalletIconError,isExistWalletError } from './wallet-error';

export class WalletObject {
	getWallet(name: string, balance: number, icon: string): Wallet {
		const icons: string[] = ['CASH', 'CARD', 'PAYPAL', 'BANK', 'PIGGY', 'VISA'];
		if (
			name == undefined ||
			name == '' ||
			balance == undefined ||
			icon == undefined ||
			isNaN(balance)
		)
			throw new WalletError();
		for (let index = 0; index < icons.length; index++) {
			if (icons[index] === icon) {
				return new Wallet(name, balance, icon);
			}
		}

		throw new WalletIconError();
	}

	isExistWallet(id ?: number ,name ?: string ): void{
		// validar el los espacios del name     
		if((id === undefined && name === undefined) || isNaN(id) ){
			throw new isExistWalletError();
		}
		
	}
}
