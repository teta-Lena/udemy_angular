import { ViewEncapsulation } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //allows styles to span whole app
  // encapsulation:ViewEncapsulation.None
  //Native , Emulated-defaulta
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}
  ngOnInit() {}
}
