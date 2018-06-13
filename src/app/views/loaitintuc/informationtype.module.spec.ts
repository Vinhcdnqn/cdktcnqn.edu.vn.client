import { InformationtypeModule } from './informationtype.module';

describe('InformationtypeModule', () => {
  let informationtypeModule: InformationtypeModule;

  beforeEach(() => {
    informationtypeModule = new InformationtypeModule();
  });

  it('should create an instance', () => {
    expect(informationtypeModule).toBeTruthy();
  });
});
