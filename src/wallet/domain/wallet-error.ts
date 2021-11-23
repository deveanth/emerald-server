export class WalletError extends Error {
	constructor(message: string = '') {
		super(
			`Error creating wallet. check the parameters assigned to the properties. 
			${message}.`,
		);
		this.name = 'WalletError';
	}
}

export class WalletIconError extends WalletError {
	constructor(message: string = '') {
		super(
			`Error the icon parameter value does not match any property. select any of the following 
            CASH, CARD, PAYPAL, BANK, PIGGY, VISA. 
			${message}.`,
		);
		this.name = 'WalletIconError';
	}
}

export class isExistWalletError extends WalletError {
	constructor(message: string = '') {
		super(`Error it is possible that the parameters are not defined or the id is not of numeric type. check that id or name is different from undefine.
		${message}.`);
		this.name = 'isExistWalletError';
	}
}
