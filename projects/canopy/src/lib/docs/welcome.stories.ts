import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { Component } from '@angular/core';

import {
  lgBrandIconAccessible,
  lgBrandIconCustomer,
  lgBrandIconDesignLibrary,
  LgBrandIconModule,
  LgBrandIconRegistry,
  lgBrandIconStopwatch,
} from '../brand-icon';

@Component({
  selector: 'lg-welcome-h1',
  template: `
    <h1 class="lg-font--expressive lg-font-size-7">
      <span class="welcome-heading no-wrap">Welcome to Canopy,</span>
      <br />
      <span class="no-wrap">The digital design system</span>
      <br />
      <span class="no-wrap">from Legal and General.</span>
    </h1>
  `,
  styles: [
    `
      .welcome-heading {
        color: var(--color-super-blue);
      }
    `,
  ],
})
class WelcomeHeadingComponent {}

@Component({
  selector: 'lg-welcome-benefits-cards',
  template: `
    <div class="welcome-card">
      <div class="welcome-card__img">
        <lg-brand-icon name="stopwatch" size="xxs"></lg-brand-icon>
      </div>
      <p>Reduce time and cost of building applications</p>
    </div>

    <div class="welcome-card">
      <div class="welcome-card__img">
        <lg-brand-icon name="design-library" size="xxs"></lg-brand-icon>
      </div>
      <p>Ready-made researched and tested design patterns</p>
    </div>

    <div class="welcome-card">
      <div class="welcome-card__img">
        <lg-brand-icon name="customer" size="xxs"></lg-brand-icon>
      </div>
      <p>Consistent customer experience</p>
    </div>

    <div class="welcome-card">
      <div class="welcome-card__img"><img src="landg-logo-colour.svg" alt="" /></div>
      <p>Plays nicely with L&G brand assets</p>
    </div>

    <div class="welcome-card">
      <div class="welcome-card__img">
        <lg-brand-icon name="accessible" size="xxs"></lg-brand-icon>
      </div>
      <p>Accessible to a minimum of AA compliance</p>
    </div>
  `,
  styles: [
    `
      :host {
        --brand-icon-fill-primary: var(--color-sky-blue);
        display: flex;
      }

      .welcome-card {
        display: inline-block;
        width: 10rem;
        margin-left: 3.125rem;
      }

      .welcome-card:first-child {
        margin-left: 0;
      }

      .welcome-card__img {
        background-color: var(--color-serenity);
        border-radius: 1rem;
        display: flex;
        justify-content: space-around;
        margin-bottom: var(--space-sm);
        padding: var(--space-lg);
      }

      .welcome-card__img > img,
      .welcome-card__img > .lg-brand-icon {
        display: inline-block;
      }
    `,
  ],
})
class WelcomeBenefitsCardsComponent {
  constructor(private brandIconRegistry: LgBrandIconRegistry) {
    this.brandIconRegistry.registerBrandIcon([
      lgBrandIconStopwatch,
      lgBrandIconDesignLibrary,
      lgBrandIconCustomer,
      lgBrandIconAccessible,
    ]);
  }
}

export default {
  title: 'Internal Welcome',
  decorators: [
    moduleMetadata({
      declarations: [ WelcomeHeadingComponent, WelcomeBenefitsCardsComponent ],
      imports: [ LgBrandIconModule ],
    }),
  ],
  parameters: {
    viewMode: 'story',
    previewTabs: { 'storybook/docs/panel': { hidden: true } },
  },
} as Meta;

const headingTemplate: Story<WelcomeHeadingComponent> = (
  args: WelcomeHeadingComponent,
) => ({
  props: args,
  template: '<lg-welcome-h1></lg-welcome-h1>',
});

export const headingStory = headingTemplate.bind({});
headingStory.storyName = 'Heading cards';

const benefitsTemplate: Story<WelcomeBenefitsCardsComponent> = (
  args: WelcomeBenefitsCardsComponent,
) => ({
  props: args,
  template: '<lg-welcome-benefits-cards></lg-welcome-benefits-cards>',
});

export const benefitsStory = benefitsTemplate.bind({});
benefitsStory.storyName = 'Benefits cards';
