import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel-top',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./panel-top.component.scss']
})
export class PanelTopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
