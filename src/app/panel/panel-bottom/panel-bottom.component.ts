import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel-bottom',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./panel-bottom.component.scss']
})
export class PanelBottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
