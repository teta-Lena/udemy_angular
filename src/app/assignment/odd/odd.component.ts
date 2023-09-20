import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css'],
})
export class OddComponent implements OnInit {
  //used when we are importing data from outside
  @Input() number: number;
  constructor() {}
  ngOnInit() {}
}
