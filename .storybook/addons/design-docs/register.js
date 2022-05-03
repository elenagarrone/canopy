import React from 'react';

import { addons, types } from '@storybook/addons';
import { Description } from '@storybook/components';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';

import { useParameter } from '@storybook/api';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  console.log('VALLUE',value)
  const item = value ? value.markdown : 'No story parameter defined';
  return <Description markdown={item}/>;
};

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.TAB,
    title: 'Design',
    route: ({ storyId, refId }) => (refId ? `/docs-design/${refId}_${storyId}` : `/docs-design/${storyId}`),
    match: ({ viewMode }) => viewMode === 'design',
    render: () => (<MyPanel />),
  });
});
