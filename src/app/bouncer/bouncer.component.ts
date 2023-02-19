import {
  Component,
  AfterViewInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

// gsap imports
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// soba imports
import { NgtGLTFLoader } from '@angular-three/soba/loaders';

// three imports
import { Object3D, Scene } from 'three';

// animation imports
import {
  openClose,
 
} from '../app.animations';

@Component({
  selector: 'app-bouncer',
  templateUrl: './bouncer.component.html',
  styleUrls: ['./bouncer.component.css'],
  animations: [
    openClose,
    //listAnimation, upDown, pageAnimations
  ],
})
export class BouncerComponent implements AfterViewInit {
  // // // global variables area

  


  f_runner: boolean = true;

  toggle_count = 0

  isOpen = true;

  zoom_controls = 'zoom_controls';

  // items: string[] = ['An', 'easy', 'way', 'to', 'get', 'even!'];

  myArray: string[] = [];

  model$ = this.ngtGLTFLoader.load('./assets/product_placeholder_7.glb');

  public plunger: Object3D | undefined;

  scrollPosition: number = 0;

  split_func_count = 0;

  title = 'bouncy';

  public whole_thing: Object3D | undefined;

  constructor(public ngtGLTFLoader: NgtGLTFLoader) {}

  ngOnInit() {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
    this.onLoadCanvasBounce()
  }

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    
  }

  split_text_func() {
    let text_string = 'An easy way to get even!';
    this.myArray = text_string.split(' ');
    

    if (this.split_func_count < 2) {
      gsap.to('.item', {
        y: '-=350',
        //x: 100,
        opacity: 1,
        duration: 1,
        stagger: 0.66,
      });
       this.split_func_count += 1;
      }
  }

  
  modelReadyService(object: Object3D) {
    // whole thing
    this.whole_thing = object.getObjectByName('Cylinder');
    this.plunger = object.getObjectByName('plunger');
    
    console.log(this.whole_thing?.parent)

    // if (this.whole_thing && this.plunger && this.f_runner) {
    //   gsap.to(this.whole_thing.position, {
    //     y: '-=0.5',
    //     duration: 1,
    //     repeat: -1,
    //     yoyo: true,
    //   });
    //   gsap.to(this.plunger.position, {
    //     y: '-=0.5',
    //     duration: 1,
    //     repeat: -1,
    //     yoyo: true,
    //   });
    // }
  }

  @ViewChild('canvas_1') canvas_1!: ElementRef;

  @ViewChild('canvas_1') canvas_1_obj!: Object3D;

  toggle() {
    this.isOpen = !this.isOpen;
    this.f_runner = !this.f_runner;
    
    
    if (this.canvas_1_obj && this.plunger && this.f_runner) {
      
      gsap.fromTo(this.canvas_1_obj.position, 
        {
        y: 200,
        duration: 3,
        repeat: -1,
        yoyo: true,
      },
      {
        y: 1,
        duration: 3,
        repeat: -1,
        yoyo: true,
      }
      );
      gsap.fromTo(this.plunger.position, 
        {
          y: 3.5,
          duration: 3,
          repeat: -1,
          yoyo: true,
        },
        {
          y: 2.5,
          duration: 3,
          repeat: -1,
          yoyo: true,
        }
      );
      this.toggle_count += 1
    ///} 
    // else if (this.whole_thing && this.plunger && this.f_runner) {
    //   gsap.to(this.whole_thing.position, {
    //     y: '-=0.5',
    //     duration: 1,
    //     repeat: -1,
    //     yoyo: true,
    //   });
    }
  }

  // viewport scroll area begins

  @ViewChild('abox') abox!: ElementRef;

  @ViewChild('wpdiv') wpdiv!: ElementRef;

  

  @HostListener('window:scroll', ['$event'])

  public onLoadCanvasBounce() {
    gsap.to('#canvas_1', 
      {
        top: '+=100px',
        repeat: -1,
        yoyo: true,
        duration: 3,
      }
      
      
      );

  }
  public onViewportScroll() {
    this.isOpen = !this.isOpen;
    this.f_runner = !this.f_runner
    
    // ⤵️ Captures / ines current window height when called
    // const windowHeight = window.innerHeight;
    // let boundingRectFive = this.abox.nativeElement.getBoundingClientRect();
    //

    //this.stop_bouncing()
    let boundingRectabox = this.abox.nativeElement.scrollTop;
    let boundingRectwpdiv = this.wpdiv.nativeElement.scrollTop;
    //console.log('from onviewportscroll: ', boundingRectwpdiv);
    if (window.pageYOffset < 300) {
      
    }
    if (window.pageYOffset > 300) {
      //console.log('Scroll Event', window.pageYOffset);


            gsap.to('.abox', {
        left: '+=100px',
        
        duration: 3,
      });
      gsap.to('.bbox', {
        top: '+=100',
        opacity: 0,
        duration: 3,
      });

      gsap.to('.down_arrow_div', {
        opacity: 0,
        duration: 3,
      });
    }
  }
}
