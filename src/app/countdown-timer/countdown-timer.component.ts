import {Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input()
  seconds = 10;
  constructor() { }

  ngOnInit(): void {
    this.start();
    this.reset();
  }
  ngOnDestroy(): void {
    this.clearTimer();
  }
  clearTimer(): void{
    clearInterval(this.intervalId);
  }
  private countDown(): void{
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime -= 1;
      if (this.remainingTime === 0){
        this.message = 'Blash off!';
        this.clearTimer();
      }else {
        this.message = 'T-${this.remainingTime} seconds and counting';
      }
    }, 1000);
  }
  start(): void {
    this.countDown();
    if (this.remainingTime <= 0 ){
      this.remainingTime = this.seconds;
    }
  }
  stop(): void {
    this.clearTimer();
    this.message = `Holding at T-${this.remainingTime} seconds`;
  }

  reset(): void {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }
}
