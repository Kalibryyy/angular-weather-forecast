import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { WeatherService } from '../wether.service';
import { Card } from '../models/card-model';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})

export class WeatherForecastComponent implements OnInit {
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private service: WeatherService,
  ){}

  countries = this.service.getCountries();

  country = this.countries[0];

  selectedCountriesControl = new FormControl('Russia');

  selectedCards: Card[] | undefined;

  ngOnInit(): any {
    this.getCountries(this.activateRoute.snapshot.paramMap.get('country') || this.countries[0].name);
  }

  handleChange(event: any): any {
    this.getCountries(event.value.name);
    this.router.navigate([event.value.name]);
  }

  getCountries(country: string): void {
    this.country = this.service.getCountry(country);
    this.selectedCards = this.service.cards.filter(item => item.country === this.country.name);
  }
}
