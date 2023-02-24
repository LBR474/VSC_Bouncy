import {
  trigger,
  state,
  stagger,
  sequence,
  animate,
  transition,
  style,
  group,
  query,
  AnimationEvent,
} from '@angular/animations';
import { Input } from '@angular/core';
import { BouncerComponent } from './bouncer/bouncer.component';
import { MovementVarsService } from './movement-vars.service';

export const goRightAgain = trigger('goRightAgain', [
  // ...
  state(
    'open',
    style({
      height: '40vh',
      width: '20vw',

      top: '10%',
      transform: 'translateX(0%)',
      //left: '-=100px',
    })
  ),
  state(
    'closed',
    style({
      height: '40vh',
      width: '20vw',

      top: '10%',
      transform: 'translateX(200%)',
      //left: '+=500px',
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
]);


export const openClose = trigger(
  'openClose',

  [
    // ...
    state(
      'halfOpen',
      style({
        left: '{{right}}',
        //left: '50%',
      }),
      { params: { right: '{{right}}' } }
    ),

    state(
      'open',
      style({
        left: '{{right}}',
        //left: '50%',
      }),
      { params: { right: '{{right}}' } }
    ),

    state(
      'closed',
      style({
        left: '{{left}}',
        //left: '10%',
      }),
      { params: { left: '{{left}}' } }
    ),
    transition('* <=> *', [animate('1.0s')]),
  ]
);

export const pageAnimations = trigger('slideInOut', [
  transition('* => *', [
    sequence([
      query(
        ':enter',
        [
          style({ transform: 'translateY(100%)' }),
          animate('200ms ease-in', style({ transform: 'translateY(50%)' })),
          style({ transform: 'translateY(-100%)' }),
        ],
        { optional: true }
      ),
      // query(':leave', [
      //   animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      // ], {optional: true})
    ]),
  ]),
]);

export const upDown = trigger('upDown', [
  // ...
  state(
    'open',
    style({
      height: '40vh',
      width: '20vw',
      opacity: 1,
      backgroundColor: 'yellow',
      top: '10%',
      left: '60%',
    })
  ),
  state(
    'closed',
    style({
      height: '40vh',
      width: '20vw',
      opacity: 0,
      top: '10%',
      left: '100%',
      //zIndex: -1,
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
]);
