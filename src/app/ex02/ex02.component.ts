import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
})
export class Ex02Component implements OnInit {

  image = new Image;
  images = new Array<Image>;

  constructor() { }

  ngOnInit(): void {
  }

  addImage() {
    let img = new Image;
    img.name = this.image.name
    img.path = "assets/img/"+img.name+".jpg"
    this.images.push(img)
  }

  removeImage() {
    this.images = this.images.filter(img => this.image.name !== img.name)
  }

}
