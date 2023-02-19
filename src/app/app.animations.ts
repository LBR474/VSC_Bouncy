import {
  trigger,
  state,
  stagger,
  animate,
  transition,
  style,
  group,
  query,
} from '@angular/animations';

export const openClose = trigger('openClose', [
  // ...
  state(
    'open',
    style({
      height: '40vh',
      width: '20vw',
      opacity: 1,
      backgroundColor: 'yellow',
      top: '10%',
      left: '10%',
    })
  ),
  state(
    'closed',
    style({
      height: '40vh',
      width: '20vw',
      opacity: 1.0,
      top: '10%',
      left: '50%',
    })
  ),
  transition('* <=> *', [animate('1.0s')]),
]);
