import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { WeatherService } from '../wether.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})

export class WeatherForecastComponent {
  constructor(
    private router: Router,
    private service: WeatherService
  ){}

  selectedCountriesControl = new FormControl(this.service.getCountries()[0]);

  selectedCards = this.service.cards.filter(item => item.country === this.service.getCountries()[0].name);

  handleChange(event: any): any {
    this.router.navigate([event.value.name]);
    // // const selectedCards: any = this.cards.filter(item => item.country === event.value.name);
    // // this.selectedCards = selectedCards;
    // if (event.value.name) {
    //   this.router.navigate([event.value.name]);
    // }
    // return false;
  }
}
