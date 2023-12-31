import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardDetailsComponent } from './components/card-details/card-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ButtonUpComponent } from './components/button-up/button-up.component';
import { CardDetailsService } from './services/card-details.service';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    CardComponent,
    CardListComponent,
    CardDetailsComponent,
    ButtonUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [CardDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
