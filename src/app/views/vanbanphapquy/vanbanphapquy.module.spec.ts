import { VanbanphapquyModule } from './vanbanphapquy.module';

describe('VanbanphapquyModule', () => {
  let vanbanphapquyModule: VanbanphapquyModule;

  beforeEach(() => {
    vanbanphapquyModule = new VanbanphapquyModule();
  });

  it('should create an instance', () => {
    expect(vanbanphapquyModule).toBeTruthy();
  });
});
