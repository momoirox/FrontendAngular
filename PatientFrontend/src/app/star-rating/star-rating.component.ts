import { Component, Input, OnChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  cropWidth!: number;
  @Input()
  rating!: number;
  @Output() 
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onClick(){
    this.ratingClicked.emit(' ${this.rating} happened!');
  }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 86 / 5;

  }

}
