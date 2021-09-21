import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 5;
  @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
  cropWidth: number = 75;
  maxWidth = 75;
  maxRating = 5;
  
  ngOnChanges() {
    this.cropWidth = this.rating * this.maxWidth/this.maxRating;
  }

  onClick() {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}