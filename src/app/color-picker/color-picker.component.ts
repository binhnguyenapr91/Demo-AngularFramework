import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  currentColor: '#E3C866';
  constructor() { }
  ngOnInit(): void {
  }

  changeCurrentColor(value): void {
    this.currentColor = value;
  }
}
