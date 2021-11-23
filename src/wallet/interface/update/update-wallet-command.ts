export class UpdateWalletCommand{
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly balance: number,
        public readonly icon: string,
    ){}
}