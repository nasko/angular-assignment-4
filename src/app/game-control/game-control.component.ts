import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Timer = NodeJS.Timer;

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalRef: any;
  @Output() numberGenerated = new EventEmitter<number>();


  constructor() { }

  ngOnInit() {
  }

  onGameStart() {
    let initialNumber = 1;
    this.intervalRef = setInterval(() => {
      this.numberGenerated.emit(initialNumber++);
    }, 1000);
  }

  onGameEnd() {
    clearInterval(this.intervalRef);
  }
}
