export class WalletError extends Error {
	constructor(message: string = '') {
		super(
			'Error creating wallet. check the parameters assigned to the properties' +
				message,
		);
		this.name = 'WalletError';
	}
}

export class WalletIconError extends WalletError {
	constructor() {
		super(
			`The icon parameter value does not match any property. select any of the following 
            CASH, CARD, PAYPAL, BANK, PIGGY, VISA`,
		);
		this.name = 'WalletIconError';
	}
}
