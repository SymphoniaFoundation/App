import { TempoModule } from './tempo.module';

describe('TempoModule', () => {
  let tempoModule: TempoModule;

  beforeEach(() => {
    tempoModule = new TempoModule();
  });

  it('should create an instance', () => {
    expect(tempoModule).toBeTruthy();
  });
});
