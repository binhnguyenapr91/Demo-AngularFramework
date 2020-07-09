import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {
  petName = 'Puppy';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  widthImage = 300;
  heightImage = 300;
  constructor() { }
  updatePetName(value: string): void {
    this.petName = value;
  }
  onChangeWitdh(value): void{
    this.widthImage = value;
  }

  onChangeHeight(value): void{
    this.heightImage = value;
  }
  ngOnInit(): void {
  }

}
