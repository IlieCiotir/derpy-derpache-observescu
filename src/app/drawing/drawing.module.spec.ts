import { DrawingModule } from './drawing.module';

describe('DrawingModule', () => {
  let drawingModule: DrawingModule;

  beforeEach(() => {
    drawingModule = new DrawingModule();
  });

  it('should create an instance', () => {
    expect(drawingModule).toBeTruthy();
  });
});
