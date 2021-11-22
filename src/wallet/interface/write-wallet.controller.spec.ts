import { Test, TestingModule } from '@nestjs/testing';
import { WriteWalletController } from './write-wallet.controller';

describe('WriteWalletController', () => {
  let controller: WriteWalletController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WriteWalletController],
    }).compile();

    controller = module.get<WriteWalletController>(WriteWalletController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
