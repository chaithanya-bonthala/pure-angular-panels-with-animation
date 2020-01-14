import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

import { TRANSITIONS } from './panel.constants';

export const panelAnimations: {
  readonly transformPanel: Array<AnimationTriggerMetadata>;
} = {
  transformPanel: [trigger('slideInOutRight', [
      state(TRANSITIONS.IN.toString(), style({
        opacity: 1,
        transform: 'translate3d(0, 0, 0)'
      })),
      state(TRANSITIONS.OUT.toString(), style({
        opacity: 0.1,
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition(TRANSITIONS.IN + ' => ' + TRANSITIONS.OUT, animate('400ms ease-in-out')),
      transition(TRANSITIONS.OUT + ' => ' + TRANSITIONS.IN, animate('400ms ease-in-out'))
    ]),

    trigger('slideInOutLeft', [
      state(TRANSITIONS.IN.toString(), style({
        opacity: 1,
        transform: 'translate3d(0%, 0, 0)'
      })),
      state(TRANSITIONS.OUT.toString(), style({
        opacity: 0.1,
        transform: 'translate3d(-100%, 0, 0)'
      })),
      transition(TRANSITIONS.IN + ' => ' + TRANSITIONS.OUT, animate('400ms ease-in-out')),
      transition(TRANSITIONS.OUT + ' => ' + TRANSITIONS.IN, animate('400ms ease-in-out'))
    ]),

    trigger('slideInOutBottom', [
      state(TRANSITIONS.IN.toString(), style({
        opacity: 1,
        transform: 'translate3d(0%, 0%, 0)'
      })),
      state(TRANSITIONS.OUT.toString(), style({
        opacity: 0.1,
        transform: 'translate3d(0, 100%, 0)'
      })),
      transition(TRANSITIONS.IN + ' => ' + TRANSITIONS.OUT, animate('400ms ease-in-out')),
      transition(TRANSITIONS.OUT + ' => ' + TRANSITIONS.IN, animate('400ms ease-in-out'))
    ]),
    
    trigger('slideInOutTop', [
      state(TRANSITIONS.IN.toString(), style({
        opacity: 1,
        transform: 'translate3d(0%, 0%, 0)'
      })),
      state(TRANSITIONS.OUT.toString(), style({
        opacity: 0.1,
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition(TRANSITIONS.IN + ' => ' + TRANSITIONS.OUT, animate('400ms ease-in-out')),
      transition(TRANSITIONS.OUT + ' => ' + TRANSITIONS.IN, animate('400ms ease-in-out'))
    ])]
};
