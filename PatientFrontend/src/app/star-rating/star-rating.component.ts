import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
  cropWidth!: number;
  @Input()
  rating!: number;
  constructor() { }

  ngOnChanges(): void {
    this.cropWidth = this.rating * 86 / 5;

  }

}
