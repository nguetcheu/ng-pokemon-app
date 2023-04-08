import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  constructor(private el: ElementRef) {
    this.setHeight(160);
    this.setBorder('#f5f5f5');
  }

  // méthode de gestion de l'evenement mouseenter
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#009688');
  }

  // méthode de gestion de l'evenement mouseleave
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setBorder(color: string) {
    let border = 'solid 4px' + color;
    this.el.nativeElement.style.border = border;
  }
}
