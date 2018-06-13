import { BinhluanModule } from './binhluan.module';

describe('BinhluanModule', () => {
  let binhluanModule: BinhluanModule;

  beforeEach(() => {
    binhluanModule = new BinhluanModule();
  });

  it('should create an instance', () => {
    expect(binhluanModule).toBeTruthy();
  });
});
