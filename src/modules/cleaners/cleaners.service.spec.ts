import { Test, TestingModule } from '@nestjs/testing';
import { CleanersService } from './cleaners.service';

describe('CleanersService', () => {
  let service: CleanersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CleanersService],
    }).compile();

    service = module.get<CleanersService>(CleanersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
