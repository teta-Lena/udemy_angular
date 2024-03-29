import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Renderer2,
  HostBinding,
  Host,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    //set style - element, property , value of the style, flags eg-important
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'blue'
    // );
    // this.backgroundColor = 'blue';
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'transparent'
    // );
    this.backgroundColor = 'green';
  }
}
