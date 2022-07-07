import { Component, OnInit } from '@angular/core';
import { ExsService } from '../service/exs.service';
import { ExServer } from '../model/ex';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ex04',
  templateUrl: './ex04.component.html',
})
export class Ex04Component implements OnInit {

  exSever = new ExServer;

  constructor(private exs: ExsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.exs.findById(id).subscribe(request => {
      this.exSever = request;
    });
  }

  atualizar(): void {
    this.exs.update(this.exSever).subscribe(() => this.router.navigate(['/EX03']));
  }
}
