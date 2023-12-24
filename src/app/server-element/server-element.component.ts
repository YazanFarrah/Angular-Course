import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;

  //{ static: true } since we're using it in ngOnInit
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
    console.log(
      'Text content of paragraph',
      this.paragraph.nativeElement.textContent
    );
  }

  ngOnInit(): void {
    console.log('Text Content', this.header.nativeElement.textContent);
    console.log('ngOnInit called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
    console.log(
      'Text content of paragraph',
      this.paragraph.nativeElement.textContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text Content', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
}
