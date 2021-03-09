import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export interface Card {
  country: string;
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

export class WeatherForecastComponent {
  constructor(private router: Router){}

  countries: Selector[] = [{
    name: 'Russia'
  },
    {
      name: 'Norway'
    },
    {
      name: 'USA'
    }, ];
  cards: Card[] = [{
    country: 'Russia',
    city: 'Saint-Petersburg',
    temperature: '-5',
    pressure: 1032,
    wind: '32%',
    precipitation: '7 m/s',
  },
    {
      country: 'Russia',
      city: 'Moscow',
      temperature: '-2',
      pressure: 1032,
      wind: '35%',
      precipitation: '8 m/s',
    },
    {
      country: 'Russia',
      city: 'Yekaterinburg',
      temperature: '-10',
      pressure: 1032,
      wind: '35%',
      precipitation: '8 m/s',
    },
    {
      country: 'Russia',
      city: 'Kazan',
      temperature: '-7',
      pressure: 1032,
      wind: '35%',
      precipitation: '8 m/s',
    },
  {
    country: 'Norway',
    city: 'Oslo',
    temperature: '-1',
    pressure: 1032,
    wind: '32%',
    precipitation: '7 m/s',
  },
  {
    country: 'USA',
    city: 'Miami',
    temperature: '+20',
    pressure: 1032,
    wind: '15%',
    precipitation: '7 m/s',
  }];

  selectedCountriesControl = new FormControl(this.countries[0]);

  selectedCards = this.cards.filter(item => item.country === this.countries[0].name);

  handleChange(event: any): any {
    const selectedCards: any = this.cards.filter(item => item.country === event.value.name);
    this.selectedCards = selectedCards;
    // this.country = event.value.name;
    // console.log(this.country);
    if (event.value.name) {
      this.router.navigate([event.value.name]);
    }
    return false;
  }
}
