import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  //makes it bindable from outside
  @Input() number: number;

  constructor() {}
  ngOnInit() {}
}
