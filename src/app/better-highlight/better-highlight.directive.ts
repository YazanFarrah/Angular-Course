import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';
//better practice because angular works with service workers as well
// and there, we don't have access to the DOM
@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // if I wanted to set single style: 

    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );

    // if I wanted to set multiple styles: 

    this.renderer.setProperty(
      this.elRef.nativeElement,
      'style',
      'color: white; background-color: blue'
    );
  }
}
