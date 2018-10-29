import { SymphoniaModule } from './symphonia.module';

describe('SymphoniaModule', () => {
  let symphoniaModule: SymphoniaModule;

  beforeEach(() => {
    symphoniaModule = new SymphoniaModule();
  });

  it('should create an instance', () => {
    expect(symphoniaModule).toBeTruthy();
  });
});
