import {Component, Input, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-countdown-timer-get-set',
  templateUrl: './countdown-timer-get-set.component.html',
  styleUrls: ['./countdown-timer-get-set.component.scss']
})
export class CountdownTimerGetSetComponent implements OnInit, OnDestroy {
  private _seconds = 10;
  private intervalId = 0;
  message = '';
  remainingTime: number;
  @Input()
  get seconds(): number{
    return this._seconds;
  }
  set seconds(v){
    v = typeof v === 'undefined' ? 10 : v;
    const fixV = Number(v);
    this._seconds = Number.isNaN(fixV) ? 10 : fixV;
  }

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
        this.message = `T-${this.remainingTime} seconds and counting`;
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
