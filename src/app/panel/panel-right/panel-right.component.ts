import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-panel-right',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./panel-right.component.scss']
})
export class PanelRightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
