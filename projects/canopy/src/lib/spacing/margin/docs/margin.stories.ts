import { Meta, moduleMetadata } from '@storybook/angular';

import { LgMarginDirective } from '../margin.directive';
import { LgCardComponent, LgCardContentComponent } from '../../../card';

const spaces = [
  'undefined',
  'none',
  'xxxs',
  'xxs',
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
  'xxl',
  'xxxl',
  'xxxxl',
];

const standardCategory = 'Standard';
const responsiveCategory = 'Responsive';

export default {
  title: 'Helpers/Directives/Margin/Examples',
  tags: [ 'pending' ],
  decorators: [
    moduleMetadata({
      imports: [ LgCardComponent, LgCardContentComponent, LgMarginDirective ],
    }),
  ],
  parameters: {
    a11y: {
      // Remove a11y checks for margin directive as unnecessary
      // and flagging false positives
      disable: true,
    },
  },
  globals: {
    backgrounds: { value: 'breezy-blue' },
  },
  argTypes: {
    margin: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginTop: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginRight: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginBottom: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginLeft: {
      options: spaces,
      table: {
        category: standardCategory,
      },
      control: {
        type: 'select',
      },
    },
    marginResponsive: {
      name: 'margin',
      table: {
        category: responsiveCategory,
      },
    },
    marginTopResponsive: {
      name: 'marginTop',
      table: {
        category: responsiveCategory,
      },
    },
    marginRightResponsive: {
      name: 'marginRight',
      table: {
        category: responsiveCategory,
      },
    },
    marginBottomResponsive: {
      name: 'marginBottom',
      table: {
        category: responsiveCategory,
      },
    },
    marginLeftResponsive: {
      name: 'marginLeft',
      table: {
        category: responsiveCategory,
      },
    },
  },
} as Meta;

export const Margin = {
  name: 'Margin',
  render: (args: LgMarginDirective) => ({
    props: args,
    template: `
      <lg-card
        [lgMargin]="margin"
        [lgMarginTop]="marginTop !== 'undefined' ? marginTop : null"
        [lgMarginRight]="marginRight !== 'undefined' ? marginRight : null"
        [lgMarginBottom]="marginBottom !== 'undefined' ? marginBottom : null"
        [lgMarginLeft]="marginLeft !== 'undefined' ? marginLeft : null">
          <lg-card-content>
            <strong>Standard spacing variant</strong>
            @if (margin) {
              <div><code>margin: {{margin | json}}</code></div>
            }
            @if (marginTop !== 'undefined') {
              <div><code>marginTop: {{marginTop | json}}</code></div>
            }
            @if (marginRight !== 'undefined') {
              <div><code>marginRight: {{marginRight | json}}</code></div>
            }
            @if (marginBottom !== 'undefined') {
              <div><code>marginBottom: {{marginBottom | json}}</code></div>
            }
            @if (marginLeft !== 'undefined') {
              <div><code>marginLeft: {{marginLeft | json}}</code></div>
            }
          </lg-card-content>
      </lg-card>
      <lg-card
        [lgMargin]="marginResponsive"
        [lgMarginTop]="marginTopResponsive !== 'undefined' ? marginTopResponsive : null"
        [lgMarginRight]="marginRightResponsive !== 'undefined' ? marginRightResponsive : null"
        [lgMarginBottom]="marginBottomResponsive !== 'undefined' ? marginBottomResponsive : null"
        [lgMarginLeft]="marginLeftResponsive !== 'undefined' ? marginLeftResponsive : null">
          <lg-card-content>
            <strong>Responsive Spacing Object</strong>
            @if (marginResponsive) {
              <div><code>marginResponsive: {{marginResponsive | json}}</code></div>
            }
            @if (marginTopResponsive) {
              <div><code>marginTopResponsive: {{marginTopResponsive | json}}</code></div>
            }
            @if (marginRightResponsive) {
              <div><code>marginRightResponsive: {{marginRightResponsive | json}}</code></div>
            }
            @if (marginBottomResponsive) {
              <div><code>marginBottomResponsive: {{marginBottomResponsive | json}}</code></div>
            }
            @if (marginLeftResponsive) {
              <div><code>marginLeftResponsive: {{marginLeftResponsive | json}}</code></div>
            }
          </lg-card-content>
      </lg-card>
      <lg-card><lg-card-content>Card without directive applied</lg-card-content></lg-card>
    `,
  }),
  args: {
    margin: 'md',
    marginTop: 'undefined',
    marginRight: 'undefined',
    marginBottom: 'undefined',
    marginLeft: 'undefined',

    marginResponsive: { xs: 'sm', sm: 'md', md: 'xxl' },
    marginTopResponsive: null,
    marginRightResponsive: null,
    marginBottomResponsive: null,
    marginLeftResponsive: null,
  },
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
};
