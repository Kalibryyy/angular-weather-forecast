import { Component } from '@angular/core';

export interface Card {
  city: string;
  temperature: string;
  pressure: number;
  wind: string;
  precipitation: string;
}

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent{
  russia: Card[] = [{
    city: 'Saint-Petersburg',
    temperature: '-12',
    pressure: 1032,
    wind: '32%',
    precipitation: '7 m/s',
  },
    {
      city: 'Moscow',
      temperature: '+2',
      pressure: 1032,
      wind: '35%',
      precipitation: '8 m/s',
    }, ];
}
