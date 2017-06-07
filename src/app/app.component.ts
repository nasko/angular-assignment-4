import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds = [];
  evens = [];

  onNumberGenerated(n: number) {
    if (n % 2 === 0) {
      this.evens.push(n);
    } else {
      this.odds.push(n);
    }
  }
}
