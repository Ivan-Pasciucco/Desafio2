import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {

  constructor(public elemRef: ElementRef, public renderer: Renderer2) {
    console.log("elemRef", elemRef);
    console.log("renderer", renderer);

    this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.elemRef.nativeElement, 'color', 'red');
  }


}
