import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
//better practice because angular works with service workers as well
// and there, we don't have access to the DOM
@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  //using Input we can bind this as well from outside "parent element"
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;
   
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // if I wanted to set single style:
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    // if I wanted to set multiple styles:
    // this.renderer.setProperty(
    //   this.elRef.nativeElement,
    //   'style',
    //   'color: white; background-color: blue'
    // );
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highlightColor;
    // this.renderer.setProperty(
    //   this.elRef.nativeElement,
    //   'style',
    //   'background-color: blue; cursor:pointer; color: white'
    // );
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.defaultColor;

    // this.renderer.setProperty(
    //   this.elRef.nativeElement,
    //   'style',
    //   'background-color: transparent'
    // );
  }
}
