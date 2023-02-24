import {
  Component,
  AfterViewInit,
  HostBinding,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

import {
  trigger,
  state,
  stagger,
  animate,
  transition,
  style,
  group,
  query,
  AnimationEvent,
} from '@angular/animations';

// gsap imports
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import * as THREE from 'three';
import { Object3D, Quaternion, Scene, Vector3 } from 'three';

// animation imports
import {
  goRightAgain,
  openClose,
  pageAnimations,
  upDown,
} from '../app.animations';
//import { AnimationEvent } from "@angular/animations";
import { MovementVarsService } from '../movement-vars.service';

@Component({
  selector: 'app-bouncer',
  templateUrl: './bouncer.component.html',
  styleUrls: ['./bouncer.component.css'],
  animations: [
    goRightAgain,
    openClose,
    pageAnimations,
    //listAnimation,
    upDown,
  ],
})
export class BouncerComponent implements AfterViewInit {
  //
  //
  //
  //
  //
  // // // global variables area

  isDisabled: boolean = false;

  //isDivIn: boolean = false;

  isOpen = true;

  model$ = this.ngtGLTFLoader.load('./assets/product_placeholder_7.glb');

  //OC_move_distance: string = '0px';

  public plunger: Object3D | undefined;

  scrollPositionArray: number[] = [];

  scrollingCount: number = 0;

  scrollingUp: boolean = false;

  scrollingDown: boolean = false;

  split_func_count = 0;

  text_string = 'An easy way to get even!';

  title = 'bouncy';

  toggle_count = 0;

  wordArray = this.text_string.split(' ');

  tl = gsap.timeline();

  tl_2 = gsap.timeline();

  public whole_thing: Object3D | undefined;

  constructor(
    public ngtGLTFLoader: NgtGLTFLoader,
    public movementVars: MovementVarsService
  ) {}

  ngOnInit() {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    this.onLoadCanvasBounce(-1);
  }

  ngAfterViewInit(): void {
    this.split_text_func();
  }

  modelReadyService(object: Object3D) {
    // whole thing
    this.whole_thing = object.getObjectByName('Cylinder');
    // plunger
    this.plunger = object.getObjectByName('plunger');
  }

  public onLoadCanvasBounce(repeat_value: number) {
    if (this.isOpen) {
      this.tl.to('#canvas_1', {
        top: '+=100px',
        repeat: repeat_value,
        yoyo: true,
        duration: 3,
      });
    }
  }

  split_text_func() {
    if (this.split_func_count < 2) {
      gsap.to('.item', {
        y: '-=350',

        opacity: 1,
        duration: 1,
        stagger: 0.66,
      });
      this.split_func_count += 1;
    }
  }
  switch_off_zoom() {
    this.isDisabled = true;
  }

  go_further() {
    this.tl_2.to('#abox', {
      x: 1000,
    });
  }

  // viewport scroll area begins
  @ViewChild('canvas_1') canvas_1!: ElementRef;

  @ViewChild('canvas_1') canvas_1_obj!: Object3D;

  @ViewChild('abox') abox!: ElementRef;

  @ViewChild('bbox') bbox!: ElementRef;

  @ViewChild('cbox') cbox!: ElementRef;

  @ViewChild('wpdiv') wpdiv!: ElementRef;

  @ViewChild('ngtcc') ngtcc!: ElementRef

  @HostListener('window:scroll', ['$event'])
  public viewportScroll() {
    this.tl.pause();

    let boundingRectabox = this.abox.nativeElement.getBoundingClientRect();

    let boundingRectbbox = this.bbox.nativeElement.getBoundingClientRect();

    let boundingRectcbox = this.cbox.nativeElement.getBoundingClientRect();

    let boundingRectngtcc = this.ngtcc.nativeElement.getBoundingClientRect();

    let boundingRectwpdiv = this.wpdiv.nativeElement.getBoundingClientRect();

    if (this.scrollPositionArray.length > 4) {
      this.scrollPositionArray.shift();
    }
    this.scrollPositionArray.push(window.scrollY);

    if (
      this.scrollPositionArray[this.scrollPositionArray.length - 1] -
        this.scrollPositionArray[this.scrollPositionArray.length - 2] <
      0
    ) {
      this.scrollingUp = true;
      this.scrollingDown = false;

      //this.movementVars.OC_move_left = window.scrollY * 100 + 'px';

      if (boundingRectabox.x > 100) {
        this.switch_off_zoom();
      }
      if (
        window.scrollY <
        boundingRectwpdiv.width - boundingRectngtcc.width
      ) {
        gsap.to('.abox', {
          x: window.scrollY,
          duration: 0.1,
        });
        if (boundingRectabox.x < boundingRectngtcc.width) {
          gsap.to('.cbox', {
            opacity: 0,
            duration: 0.1
          })
          this.tl.resume()
        }
       
      }
    } else {
      this.scrollingDown = true;
      this.scrollingUp = false;

      if (boundingRectabox.x > 100) {
        this.switch_off_zoom();
      }

      

      if (
        window.scrollY <
        //boundingRectwpdiv.width - boundingRectabox.width * 1.5
        boundingRectwpdiv.width / 2
        
      ) {
        gsap.to('.abox', {
          x: window.scrollY,
        });
        gsap.to('.bbox', {
          y: window.scrollY,
          opacity: 0,
          duration: 3,
        });
        gsap.to('.down_arrow_div', {
          y: window.scrollY,
          opacity: 0,
          duration: 3,
        });
        if ( boundingRectabox.x > boundingRectcbox.width) {
        gsap.to('.cbox', {
          // width: boundingRectabox.x,
          opacity: 1,
          duration: 0.1,
        });
      }
        // console.log(boundingRectbbox);
      } else if (boundingRectbbox.y > 750) {
        console.log(boundingRectbbox);
        gsap.to('.abox', {
          x: boundingRectwpdiv.width - boundingRectngtcc.width,
        });
      }
    }
  }
}
