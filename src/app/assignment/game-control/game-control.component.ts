import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval;
  //add output decorator so that it cna be listed to from outside
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  constructor() {}
  ngOnInit() {}
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onStopGame() {
    clearInterval(this.interval);
  }
}
