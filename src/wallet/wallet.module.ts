import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WriteWallet } from './infrastructure/write-wallet';
import { WalletRepository } from './infrastructure/wallet-repository';
import { CreateWalletHandler } from './interface/create-wallet-handler';
import { WriteWalletController } from './interface/write-wallet.controller';

export const CommandHandlers = [CreateWalletHandler];
@Module({
	imports: [CqrsModule, TypeOrmModule.forFeature([WalletRepository])],
	providers: [WriteWallet, ...CommandHandlers],
	controllers: [WriteWalletController],
})
export class WalletModule {}
