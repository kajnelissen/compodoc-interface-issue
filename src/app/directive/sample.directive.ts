import { Directive, ElementRef, Input, DoCheck } from '@angular/core';

@Directive({
    selector: "[sample]"
})
export class SampleDirective {

  public constructor(private element: ElementRef) { }

}
