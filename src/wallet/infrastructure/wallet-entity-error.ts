
export class WalletEntityError extends Error{
    constructor(message: string = ''){
        super(`The wallet ID or name does not exist. Please enter a registered ID.`);
        this.name = 'WalletEntityError';
    }
}

