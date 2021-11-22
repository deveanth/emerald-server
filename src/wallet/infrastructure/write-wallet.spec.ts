import { Test, TestingModule } from '@nestjs/testing';
import { WriteWallet } from './write-wallet';

describe('WriteWallet', () => {
  let provider: WriteWallet;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WriteWallet],
    }).compile();

    provider = module.get<WriteWallet>(WriteWallet);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
