import { Injectable } from '@angular/core';

import { Country } from './models/country-model';
import { COUNTRIES } from './mock-data/mock-countries';
import { CARDS } from './mock-data/mock-cards';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  cards = CARDS;

  getCountries(): Country[] {
    return COUNTRIES;
  }

  getCountry(country: string): Country{
    return COUNTRIES.find(item => item.name === country) || COUNTRIES[0];
  }
}
