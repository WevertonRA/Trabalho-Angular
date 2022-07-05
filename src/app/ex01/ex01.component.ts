import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ex01',
  templateUrl: './ex01.component.html',
  styleUrls: ['./ex01.component.css']
})
export class Ex01Component {

  constructor(
    private router: Router
  ) { }

  goToEX02() {
    this.router.navigate(['/EX02']);
  }

  goToEX03() {
    this.router.navigate(['/EX03']);
  }

  goToEX0() {
    this.router.navigate(['/EX04', '1']);
  }
}
