import { HoidapModule } from './hoidap.module';

describe('HoidapModule', () => {
  let hoidapModule: HoidapModule;

  beforeEach(() => {
    hoidapModule = new HoidapModule();
  });

  it('should create an instance', () => {
    expect(hoidapModule).toBeTruthy();
  });
});
