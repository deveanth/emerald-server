import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteWalletTypeORM } from './infrastructure/write-wallet-typeorm';
import { WalletRepository } from './infrastructure/wallet-repository';
import { ReadWalletTypeORM } from './infrastructure/read-wallet-typeorm';
import { ReadWalletController } from './interface/read-wallet.controller';
import { WriteWalletController } from './interface/write-wallet.controller';
import { CreateWalletHandler } from './interface/create/create-wallet-handler';
import { RemoveWalletHandler } from './interface/remove/remove-wallet-handler';
import { UpdateWalletHandler } from './interface/update/update-wallet-handler';
import { FindOneWalletHandler } from './interface/find-one/find-one-wallet-handler';
import { FindAllWalletHandler } from './interface/find/find-all-wallet-handler';

export const CommandHandlers = [
	CreateWalletHandler,
	RemoveWalletHandler,
	UpdateWalletHandler,
];

export const QueryHandler = [FindOneWalletHandler, FindAllWalletHandler];
@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([WalletRepository])],
	providers: [
		WriteWalletTypeORM,
		ReadWalletTypeORM,
		...CommandHandlers,
		...QueryHandler,
	],
	controllers: [WriteWalletController, ReadWalletController],
})
export class WalletModule {}
