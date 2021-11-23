import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteWalletTypeORM } from './infrastructure/write-wallet-typeorm';
import { WalletRepository } from './infrastructure/wallet-repository';
import { CreateWalletHandler } from './interface/create/create-wallet-handler';
import { WriteWalletController } from './interface/write-wallet.controller';
import { RemoveWalletHandler } from './interface/remove/remove-wallet-handler';
import { UpdateWalletHandler } from './interface/update/update-wallet-handler';

export const CommandHandlers = [CreateWalletHandler,RemoveWalletHandler,UpdateWalletHandler];
@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([WalletRepository])],
	providers: [WriteWalletTypeORM, ...CommandHandlers],
	controllers: [WriteWalletController],
})
export class WalletModule {}
