import { Component, OnInit, EventEmitter, HostListener } from '@angular/core';
import { delay, switchMap, map, concatMap, tap, skipWhile, filter, debounceTime } from 'rxjs/operators';
import { combineLatest, of, interval, concat, from, merge } from 'rxjs';

interface Style {
  [key: string]: string;
}
@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.scss']
})
export class PainterComponent implements OnInit {

  private keyboardInput = new EventEmitter<KeyboardEvent>();
  private lastMouseInput = 0;
  private mouseInput = new EventEmitter<MouseEvent>();
  private slow = interval(5000);
  private normal = interval(1000);
  private fast = interval(200);
  private faster = interval(100);

  public x$ = of({ 'left': `300px` });
  public x2$ = of({ 'left': '700px' });
  public x3$ = of({ 'left': '400px' });
  public y$ = of({ 'top': `200px` });
  public y2$ = of({ 'top': `500px` });


  private rotate = 0;
  private rotate$ = merge(
    this.mouseInput.pipe(
      debounceTime(100),
      tap(() => this.lastMouseInput = Date.now()),
      map(e => e.screenX)
    ),
    this.fast.pipe(
      filter(() => Date.now() - this.lastMouseInput >= 500),
      map(_ => this.rotate += 10)
    )
  )
    .pipe(
      map(r => ({ 'transform': `rotate(${r}deg)` }))
    );


  private rotate2 = 0;
  private rotate2$ = this.fast.pipe(map(_ => ({ 'transform': `rotate(${this.rotate2 += Math.random() * 100}deg)` })));

  private color = { r: 0, g: 100, b: 200 };
  private backgroundColor$ = this.faster.pipe(
    map(_ => ({ 'background-color': `rgb(${(this.color.r += 10) % 255}, ${this.color.g}, ${this.color.b})` }))
  );

  private width = 10;
  public width$ = concat(of({}), this.faster)
    .pipe(
      map(_ => ({ 'width': `${(this.width += 3) % 30}vw` }))
    );

  private height = 5;
  public height$ = concat(of({}), this.faster)
    .pipe(
      map(_ => ({
        'height': `${this.height === 5 ? this.height = 10 : this.height = 5}vh`
      }))
    );

  public style$ = combineLatest(
    this.rotate$, this.x$, this.y$,
    (rotate, x, y) => {
      return Object.assign({}, rotate, x, y);
    });

  public style2$ = combineLatest(
    this.rotate2$, this.x2$, this.y$,
    (rotate, x, y, ) => {
      return Object.assign({}, rotate, x, y);
    });

  public style3$ = combineLatest(
    this.backgroundColor$, this.x3$, this.y2$, this.width$, this.height$,
    (background, x, y, width, height) => {
      return Object.assign({}, background, x, y, width, height);
    });

  private eyeBrowStyle: Style = {
    'background-color': 'black',
    'width': '150px',
    'height': '30px'
  };

  private leftEyebrowX: Style = {
    'left': '300px'
  };

  private rightEyeBrowX: Style = {
    'left': '700px'
  };

  private eyeBrowY = [150, 50];

  private eyeBrowY$ = concat(
    of(150),
    this.keyboardInput.pipe(
      switchMap(() => from(this.eyeBrowY.concat(this.eyeBrowY.concat([]).reverse()))),
      concatMap(v => of(v).pipe(delay(100)))
    ))
    .pipe(
      map(v => ({ 'top': `${v}px` }))
    );

  public styleEyebrowLeft$ = combineLatest(of(this.eyeBrowStyle), of(this.leftEyebrowX), this.eyeBrowY$,
    (common, x, y) => Object.assign({}, common, x, y));

  public styleEyebrowRight$ = combineLatest(of(this.eyeBrowStyle), of(this.rightEyeBrowX), this.eyeBrowY$,
    (common, x, y) => Object.assign({}, common, x, y));

  constructor() { }

  ngOnInit() { }

  @HostListener('window:keyup', ['$event'])
  public onKey(event) {
    this.keyboardInput.emit(event);
  }

  @HostListener('window:mousemove', ['$event'])
  public onMouseMove(event: MouseEvent) {
    this.mouseInput.emit(event);
  }
}
