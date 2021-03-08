import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export interface Card {
  city: string;
  temperature: string;
  pressure: number;
  wind: string;
  precipitation: string;
}

export interface Selector {
  name: string;
}

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent{
  countries: Selector[] = [{
    name: 'russia'
  },
    {
      name: 'norway'
    },
    {
      name: 'usa'
    }, ];
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
  norway: Card[] = [{
    city: 'Oslo',
    temperature: '-1',
    pressure: 1032,
    wind: '32%',
    precipitation: '7 m/s',
  }];
  usa: Card[] = [{
    city: 'Miami',
    temperature: '+20',
    pressure: 1032,
    wind: '15%',
    precipitation: '7 m/s',
  }];

  selectedCountriesControl = new FormControl();
}
