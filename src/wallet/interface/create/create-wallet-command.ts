export class CreateWalletCommand {
	constructor(
		public readonly name: string,
		public readonly balance: number,
		public readonly icon: string,
	) {}
}
