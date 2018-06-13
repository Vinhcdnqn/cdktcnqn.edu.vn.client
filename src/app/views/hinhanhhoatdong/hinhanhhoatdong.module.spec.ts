import { HinhanhhoatdongModule } from './hinhanhhoatdong.module';

describe('HinhanhhoatdongModule', () => {
  let hinhanhhoatdongModule: HinhanhhoatdongModule;

  beforeEach(() => {
    hinhanhhoatdongModule = new HinhanhhoatdongModule();
  });

  it('should create an instance', () => {
    expect(hinhanhhoatdongModule).toBeTruthy();
  });
});
