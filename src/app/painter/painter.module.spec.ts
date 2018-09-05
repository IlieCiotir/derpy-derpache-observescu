import { PainterModule } from './painter.module';

describe('PainterModule', () => {
  let painterModule: PainterModule;

  beforeEach(() => {
    painterModule = new PainterModule();
  });

  it('should create an instance', () => {
    expect(painterModule).toBeTruthy();
  });
});
