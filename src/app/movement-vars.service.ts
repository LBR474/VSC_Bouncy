import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovementVarsService {


   OC_move_left: string = '100px'
   OC_move_right: string = '100px'
  constructor() { }
}
