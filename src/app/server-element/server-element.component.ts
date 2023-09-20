import { ViewEncapsulation } from '@angular/compiler';
import {
  SimpleChanges,
  Component,
  OnInit,
  Input,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //allows styles to span whole app
  // encapsulation:ViewEncapsulation.None
  //Native , Emulated-defaulta
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string; name: string; content: string };
  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  //ngDoCheck
  //ngAfterContentInit
  //ngAfterContentChecked
  //ngAfterViewInit
  //ngAfterViewChecked
  //ngOnDestroy
}
