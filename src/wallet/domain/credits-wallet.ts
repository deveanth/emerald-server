import { Wallet } from './wallet';
export class CreditsWallet {
	private _wallet: Wallet;

	private _closingDate: Date;

	private _expirationDate: Date;

	constructor(wallet: Wallet, closingDate: Date, expirationDate: Date) {
		this.wallet = wallet;
		this.closingDate = closingDate;
		this.expirationDate = expirationDate;
	}

	public get wallet(): Wallet {
		return this._wallet;
	}
	public set wallet(value: Wallet) {
		this._wallet = value;
	}

	public get closingDate(): Date {
		return this._closingDate;
	}
	public set closingDate(value: Date) {
		this._closingDate = value;
	}

	public get expirationDate(): Date {
		return this._expirationDate;
	}
	public set expirationDate(value: Date) {
		this._expirationDate = value;
	}
}
