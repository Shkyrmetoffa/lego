import { Component } from '@angular/core';
import {SquareComponent} from './square';
import {ColorServiceService} from './color-service.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SquareComponent],
  providers: [ColorServiceService]
})
export class AppComponent {
  public list = [];
  public tempSell: any = {};
  public count = 6;
  public counter = 0;

  constructor(private _colorService: ColorServiceService ) {
    this.generateList(this.count);
  }

  generateList(count){

    for(let i = 0; i < count; i++) {
      let elemColor = (i % 2 != 0 ) ? this.list[i-1].background : false;
      this.list.push(this.createItem(i, elemColor));
      this.list.sort();
    }
  }
  createItem(index, elemColor) {
    return {background: elemColor || this._colorService.getRandomBackground(), isOpen: false, id: index, pair: false};
  }

  destroy(cell){
    setTimeout(() => {
      if (!this.tempSell.background) {
        this.tempSell = cell;
      } else {
        if (this.tempSell.background === cell.background) {
          cell.isOpen = true;
          this.tempSell.isOpen = true;
          this.tempSell.pair = true;
          cell.pair = true;
          this.counter +=2;

          if (this.counter === this.count) {
            //this.cell = 0;
            this.counter = 0;
            alert ('Next level');
            this.list = [];
            this.count += 6;
            this.generateList (this.count);
          }
        }  else {
          this.tempSell.isOpen = false;
          cell.isOpen = false;

        }

        this.tempSell = {};
      }
    }, 1000);

  }

}

