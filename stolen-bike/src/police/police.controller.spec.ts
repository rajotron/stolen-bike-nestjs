import { Test, TestingModule } from '@nestjs/testing';
import { PoliceController } from './police.controller';

describe('Police Controller', () => {
  let controller: PoliceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoliceController],
    }).compile();

    controller = module.get<PoliceController>(PoliceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
