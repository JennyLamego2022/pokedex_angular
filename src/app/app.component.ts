import { Component } from '@angular/core';
import { CardDetailsService } from './services/card-details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardDetailsService]
})
export class AppComponent {
  title = 'pokemon_api';
  constructor(public cardDetailsService: CardDetailsService) {}
}
