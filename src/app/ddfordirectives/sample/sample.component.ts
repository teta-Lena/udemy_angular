import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent {
  numbers = [1, 2, 3, 4, 5];
  onlyOdd = false;
  value = 10;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
}
