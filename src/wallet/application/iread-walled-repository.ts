export interface IReadWalletRepository {
	findOne(id?: number, name?: string): Promise<any>;
	findAll(): Promise<any>;
}
