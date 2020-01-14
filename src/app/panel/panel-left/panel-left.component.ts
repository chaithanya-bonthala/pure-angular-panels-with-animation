import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-left',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./panel-left.component.scss']
})
export class PanelLeftComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
