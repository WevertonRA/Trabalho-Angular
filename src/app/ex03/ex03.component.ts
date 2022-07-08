import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExServer } from '../model/ex';
import { ExsService } from '../service/exs.service';

@Component({
  selector: 'app-ex03',
  templateUrl: './ex03.component.html',
})
export class Ex03Component implements OnInit {

  exSever: Array<ExServer>;
  value = new ExServer;

  constructor(private exs: ExsService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.exs.findAll().subscribe(request => {
      this.exSever = request;
      this.value.id = this.exSever[this.exSever.length - 1].id + 1;
      this.value.value = request[request.length - 1].value;
    });
  }

  inserir(): void {
    this.exs.create(this.value).subscribe(() =>{ 
      this.findAll();
      this.value = new ExServer;
    });
  }

  deleteItem(ex: ExServer): void {
    this.exs.delete(ex).subscribe(() => this.findAll());
  }

  goToAtualizar(id: any): void {
    this.router.navigate(['/EX04', id]);
  }
}
