import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'lg-promo-card-content',
  templateUrl: './promo-card-content.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LgPromoCardContentComponent {
  @HostBinding('class.lg-promo-card-content') class = true;
}
