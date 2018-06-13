import { LienheModule } from './lienhe.module';

describe('LienheModule', () => {
  let lienheModule: LienheModule;

  beforeEach(() => {
    lienheModule = new LienheModule();
  });

  it('should create an instance', () => {
    expect(lienheModule).toBeTruthy();
  });
});
