import { GooglyEyeModule } from './googly-eye.module';

describe('GooglyEyeModule', () => {
  let googlyEyeModule: GooglyEyeModule;

  beforeEach(() => {
    googlyEyeModule = new GooglyEyeModule();
  });

  it('should create an instance', () => {
    expect(googlyEyeModule).toBeTruthy();
  });
});
