import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {
  @Input()
  like: number;

  @Output()
  likeClicked: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onLike(): void {
    this.likeClicked.emit();
  }
}
