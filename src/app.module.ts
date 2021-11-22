import { Module } from '@nestjs/common';
import { SettingModule } from '@setting/setting.module';
import { DatabaseModule } from '@database/database.module';
import { WalletModule } from '@wallet/wallet.module';
import { TransactionModule } from '@transaction/transaction.module';
@Module({
	imports: [SettingModule, TransactionModule, WalletModule, DatabaseModule],
})
export class AppModule {}
