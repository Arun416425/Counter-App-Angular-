import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('counter_app');

  count = 0
  inc() {
    this.count++
  }
  dec() {
    if (this.count > 0) {
      this.count--
    }
  }
  reset() {
    this.count = 0
  }

  handleClick(value: string) {
    if (value === "inc") {
      this.count++
    } else if (value === "dec") {
      if (this.count > 0) {
        this.count--
      }
    } else {
      this.count = 0
    }
  }
}
