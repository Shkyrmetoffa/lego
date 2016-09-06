import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'square',
  templateUrl: 'square.component.html',
  styleUrls: ['square.component.css']
})
export class SquareComponent implements OnInit {
  @Input()
  cell: any;

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  openColor() {
    this.cell.isOpen = !this.cell.isOpen;
    this.remove.emit({cell: this.cell});
  }
  ngOnInit() {
  }

}
