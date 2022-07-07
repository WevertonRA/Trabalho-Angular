import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
})
export class Ex01Component {

  @Input() title = "EX-01"

  constructor(
    private router: Router
  ) { }

  goToHome() {
    this.router.navigate(['']);
  }

  goToEX02() {
    this.router.navigate(['/EX02']);
  }

  goToEX03() {
    this.router.navigate(['/EX03']);
  }
}
