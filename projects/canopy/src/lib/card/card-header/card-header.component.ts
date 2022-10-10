import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';

import { LgCardNavigationTitleComponent } from '../card-navigation-title/card-navigation-title.component';

@Component({
  selector: 'lg-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: [ './card-header.component.scss' ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'lg-card-header',
  },
})
export class LgCardHeaderComponent implements AfterContentInit {
  @ContentChild(forwardRef(() => LgCardNavigationTitleComponent))
  cardNavigationTitle: LgCardNavigationTitleComponent;

  constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

  ngAfterContentInit(): void {
    if (this.cardNavigationTitle) {
      this.renderer.addClass(this.hostElement.nativeElement, 'lg-card-header--nav');
    }
  }
}
