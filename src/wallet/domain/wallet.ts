export class Wallet {
	private _name: string;
	private _balance: number;
	private _icon: string;

	constructor(name: string, balance: number, icon: string) {
		this._name = name;
		this._balance = balance;
		this._icon = icon;
	}

	public get name(): string {
		return this._name;
	}
	public set name(value: string) {
		this._name = value;
	}

	public get balance(): number {
		return this._balance;
	}
	public set balance(value: number) {
		this._balance = value;
	}

	public get icon(): string {
		return this._icon;
	}
	public set icon(value: string) {
		this._icon = value;
	}
}
