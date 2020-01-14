import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IDirections, DIRECTIONS, TRANSITIONS, IPanelConfig } from './panel/panel.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Panels';

  public isTopPanelVisible: boolean = TRANSITIONS.OUT;
  public isRightPanelVisible: boolean = TRANSITIONS.OUT;
  public isBottomPanelVisible: boolean = TRANSITIONS.OUT;
  public isLeftPanelVisible: boolean = TRANSITIONS.OUT;
  public isDefaultPanelVisible: boolean = TRANSITIONS.OUT;

  public DIRECTIONS: IDirections = DIRECTIONS;

  public topPanelConfig: IPanelConfig = {
    hasOverlay: true,
    bodyContainerClass: 'my-top-body'
  }
  public rightPanelConfig: IPanelConfig = {
    hasOverlay: true,
    bodyContainerClass: 'my-right-body'
  }
  public bottomPanelConfig: IPanelConfig = {
    hasOverlay: true,
    bodyContainerClass: 'my-bottom-body'
  }
  public leftPanelConfig: IPanelConfig = {
    hasOverlay: true,
    bodyContainerClass: 'my-left-body'
  }
  public defaultPanelConfig: IPanelConfig = {
    hasOverlay: true,
    bodyContainerClass: 'my-default-body'
  }

  constructor() { }

  ngOnInit() {
  }

  openTopPanel() {
    this.isTopPanelVisible = TRANSITIONS.IN;
  }
  onTopPanelClose(event): void {
    this.isTopPanelVisible = TRANSITIONS.OUT;
  }

  openRightPanel() {
    this.isRightPanelVisible = TRANSITIONS.IN;
  }
  onRightPanelClose(event): void {
    this.isRightPanelVisible = TRANSITIONS.OUT;
  }

  openBottomPanel() {
    this.isBottomPanelVisible = TRANSITIONS.IN;
  }
  onBottomPanelClose(event): void {
    this.isBottomPanelVisible = TRANSITIONS.OUT;
  }

  openLeftPanel() {
    this.isLeftPanelVisible = TRANSITIONS.IN;
  }
  onLeftPanelClose(event): void {
    this.isLeftPanelVisible = TRANSITIONS.OUT;
  }

  openDefaultPanel(event): void {
    this.isDefaultPanelVisible = TRANSITIONS.IN;
  }
  onDeafultPanelClose(event): void {
    this.isDefaultPanelVisible = TRANSITIONS.OUT;
  }
}
