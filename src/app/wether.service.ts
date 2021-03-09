import { Injectable } from "@angular/core";

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

@Injectable({ providedIn: 'root' })
export class WeatherService {
  getCountries(): Selector[] { 
    return [{
      name: 'Russia'
    },
    {
      name: 'Norway'
    },
    {
      name: 'USA'
    },
  ];
  }
  
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
}