import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { panelAnimations } from './panel.animations';
import { IDirections, DIRECTIONS, TRANSITIONS, IPanelConfig, DEFAULTCONFIG } from './panel.constants';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  animations: panelAnimations.transformPanel
})
export class PanelComponent implements OnInit {

  @Input('config') config: IPanelConfig = DEFAULTCONFIG;

  @Input('panelTitle') panelTitle: string = 'Panel title';

  public DIRECTIONS: IDirections = DIRECTIONS;

  @Input('direction') direction: string = DIRECTIONS.RIGHT;

  @Input('isVisible') isVisible:  boolean = TRANSITIONS.OUT;

  @Output('onPanelClose') onPanelClose: EventEmitter<void> = new EventEmitter();

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  closeClickHandler() {
    this.onPanelClose.emit();
  }

}
