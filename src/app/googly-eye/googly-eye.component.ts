import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-googly-eye',
  templateUrl: './googly-eye.component.html',
  styleUrls: ['./googly-eye.component.scss']
})
export class GooglyEyeComponent implements OnInit {
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
