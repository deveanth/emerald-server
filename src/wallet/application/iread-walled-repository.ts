export interface IReadWalletRepository {
	findOne(id: number): Promise<any>;
	findAll(): Promise<any>;
}
