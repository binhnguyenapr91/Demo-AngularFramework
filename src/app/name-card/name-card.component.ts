import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {
@Input()
name = 'default';
@Input()
phone = 'default';
@Input()
address = 'default';
  constructor() { }

  ngOnInit(): void {
  }

}
