import { Injectable } from '@angular/core';

@Injectable()
export class ColorServiceService {
  private images = [];

  constructor(){
    this.images = [
      'url(http://cs11079.vk.me/v11079510/6b4/Tt8t8J3wkfo.jpg)',
      'url(http://cs624625.vk.me/v624625803/13395/-uHZNv1UR9U.jpg)',
      'url(http://www.i-brick.ru/design/user/ibrick/images/footer-man.png)',
      'url(http://legocraft.ru/wp-content/uploads/2013/01/lego_8805_minifigures_sherlok_holms_serija_5.png)',
      'url(http://cs305513.vk.me/v305513443/49ba/EVWidNiZ-uQ.jpg)'
    ]
  }
  // private colors = ['FFFF00', '4B0082', '1E90FF', '4B0082', '1E90FF', '0000CD'];

  getRandomBackground() {

    let newColor = this.images[Math.floor(Math.random() * this.images.length)];
    return newColor;
  }
}


