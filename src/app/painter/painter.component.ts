import { Component, OnInit, EventEmitter } from '@angular/core';
import { delay, switchMap, map } from 'rxjs/operators';
import { combineLatest, of, interval } from 'rxjs';

interface Style {
  [key: string]: string;
}
@Component({
  selector: 'app-painter',
  templateUrl: './painter.component.html',
  styleUrls: ['./painter.component.scss']
})
export class PainterComponent implements OnInit {

  private slow = interval(5000);
  private normal = interval(1000);
  private fast = interval(200);
  private faster = interval(100);

  public x$ = of({ 'left': `300px` });
  public x2$ = of({ 'left': '700px' });
  public x3$ = of({ 'left': '500px' });
  public y$ = of({ 'top': `200px` });
  public y2$ = of({ 'top': `600px` });

  private rotate = 0;
  private rotate$ = this.fast.pipe(map(_ => ({ 'transform': `rotate(${this.rotate += 10}deg)` })));

  private color = { r: 0, g: 100, b: 200 };
  private backgroundColor$ = this.faster.pipe(
    map(_ => ({ 'background-color': `rgb(${(this.color.r += 10) % 255}, ${this.color.g}, ${this.color.b})` }))
  );

  private width = 10;
  public width$ = this.slow.pipe(
    map(_ => ({ 'width': `${(this.width += 3) % 30}vw` }))
  );

  public style$ = combineLatest(
    this.rotate$, this.backgroundColor$, this.x$, this.y$, this.width$,
    (rotate, background, x, y, width) => {
      return Object.assign({}, rotate, background, x, y, width);
    });

  public style2$ = combineLatest(
    this.rotate$, this.backgroundColor$, this.x2$, this.y$, this.width$,
    (rotate, background, x, y, width) => {
      return Object.assign({}, rotate, background, x, y, width);
    });

  public style3$ = combineLatest(
    this.backgroundColor$, this.x3$, this.y2$, this.width$,
    (background, x, y, width) => {
      return Object.assign({}, background, x, y, width);
    });

  constructor() { }

  ngOnInit() { }

}
