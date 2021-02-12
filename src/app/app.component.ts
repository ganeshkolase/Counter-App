import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  count: number;
  minDecreaseLimit = 0;
  maxIncreaseLimit = 10;
  alert = false;

  constructor() {
    this.count = 0;
  }

  counterIncrease(): void {
    if (this.count < this.maxIncreaseLimit) {
      this.count += 1;
      this.discardAlert();
    } else {
      this.showAlert();
    }
  }

  private showAlert(): void {
    this.alert = true;
  }

  discardAlert(): void {
    this.alert = false;
  }

  counterDecrease(): void {
    if (this.count !== this.minDecreaseLimit) {
      this.count -= 1;
      this.discardAlert();
    } else {
      this.showAlert();
    }
  }

  counterReset(): void {
    this.count = 0;
    this.discardAlert();
  }
}
