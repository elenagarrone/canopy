import React from 'react';

import { addons, types } from '@storybook/addons';
import Markdown from 'markdown-to-jsx';
import { ADDON_ID, PANEL_ID, PARAM_KEY } from './constants';
import { DocsWrapper, DocsContent } from '@storybook/components';

import { useParameter } from '@storybook/api';

const MyPanel = () => {
  const value = useParameter(PARAM_KEY, null);
  console.log('VALLUE',value)
  const item = value ? value.file : 'No story parameter defined';
  return (
    <DocsWrapper className="sbdocs sbdocs-wrapper">
      <DocsContent className="sbdocs sbdocs-content">
        <Markdown options={{ forceBlock: true }}>
          {item}
        </Markdown>
      </DocsContent>
    </DocsWrapper>
  )
  // return <div className="sbdocs sbdocs-wrapper"><Markdown options={{ forceBlock: true }}>{item}</Markdown></div>;
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
