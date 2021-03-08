import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../weather-forecast/weather-forecast.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  card!: Card;

  ngOnInit(): void {}

  // @Input() card: Card;
}
