import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating-bar-container',
  templateUrl: './rating-bar-container.component.html',
  styleUrls: ['./rating-bar-container.component.scss']
})
export class RatingBarContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onRateChange(value): void {
    console.log(value);
  }
}
