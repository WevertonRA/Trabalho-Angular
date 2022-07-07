import { Component, OnInit } from '@angular/core';
import { Image } from '../model/image';

@Component({
  selector: 'app-ex02',
  templateUrl: './ex02.component.html',
})
export class Ex02Component {

  image = new Image;
  images = new Array<Image>;

  constructor() { }

  addImage() {
    let img = new Image;
    img.name = this.image.name
    img.path = "assets/" + img.name + ".jpg"
    this.images.push(img)
    this.image = new Image
  }

  removeImage() {
    this.images = this.images.filter(img => this.image.name !== img.name)
  }

}
