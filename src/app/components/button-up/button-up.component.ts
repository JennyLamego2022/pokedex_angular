import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-button-up',
  templateUrl: './button-up.component.html',
  styleUrls: ['./button-up.component.css']
})
export class ButtonUpComponent {

  constructor(private router: Router) { }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  

}
