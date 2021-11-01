import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  cropWidth!: number;
  @Input()
  rating!: number;
  constructor() { }
  ngOnChanges(): void {
    this.cropWidth = this.rating * 86 / 5;

  }


}
