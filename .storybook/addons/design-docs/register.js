import React from 'react';

import { addons, types } from '@storybook/addons';
import Markdown from 'markdown-to-jsx';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';

import { useParameter } from '@storybook/api';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  console.log('VALLUE',value)
  const item = value ? value.file : 'No story parameter defined';
  // Using Docs component will break as when going back to
  // the other tabs the content of this will be shown below the other
  // content
  return (
    <Markdown options={{ forceBlock: true }}>
      {item}
    </Markdown>
  )
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
