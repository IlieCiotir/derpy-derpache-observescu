import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  @Input() public style$: Observable<{ [key: string]: string }>;

  public id = Math.random();

  public style: { [key: string]: string } = {};
  constructor() { }

  ngOnInit() {
    if (this.style$) {
      this.style$.subscribe(v => this.style = v);
    }

  }

}
