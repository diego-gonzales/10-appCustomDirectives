import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomIf]'
})
export class CustomIfDirective {

  @Input('appCustomIf') set showDiv( show: boolean ) {
    show ? this.viewContainerRef.createEmbeddedView(this.templateRef)
         : this.viewContainerRef.clear();
  }

  constructor( private templateRef: TemplateRef<HTMLElement>,
               private viewContainerRef: ViewContainerRef ) {}

}
