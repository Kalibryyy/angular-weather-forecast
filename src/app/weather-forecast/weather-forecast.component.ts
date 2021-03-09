import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
// implements OnInit
export class WeatherForecastComponent {
  // constructor(
  //   private route: ActivatedRoute,
  // ) {}

  constructor(private router: Router){}

  countries: Selector[] = [{
    name: 'russia'
  },
    {
      name: 'norway'
    },
    {
      name: 'usa'
    }, ];
  cards: Card[] = [{
    country: 'russia',
    city: 'Saint-Petersburg',
    temperature: '-12',
    pressure: 1032,
    wind: '32%',
    precipitation: '7 m/s',
  },
    {
      country: 'russia',
      city: 'Moscow',
      temperature: '+2',
      pressure: 1032,
      wind: '35%',
      precipitation: '8 m/s',
    },
  {
    country: 'norway',
    city: 'Oslo',
    temperature: '-1',
    pressure: 1032,
    wind: '32%',
    precipitation: '7 m/s',
  },
  {
    country: 'usa',
    city: 'Miami',
    temperature: '+20',
    pressure: 1032,
    wind: '15%',
    precipitation: '7 m/s',
  }];

  selectedCountriesControl = new FormControl(this.countries[0]);

  selectedCards = this.cards.filter(item => item.country === this.countries[0].name);

  country = '';

  // ngOnInit(): any {
  //   this.route.queryParams.subscribe(params => {
  //     this.country = params.country;
  //   });
  // }

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
