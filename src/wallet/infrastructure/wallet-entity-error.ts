export class WalletEntityError extends Error {
	constructor(message: string = '') {
		super(`The wallet ID does not exist. Please enter a registered ID.
        ${message}.`);
		this.name = 'WalletEntityError';
	}
}
