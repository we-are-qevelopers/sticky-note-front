import React from 'react';
import StickyNote from '../organisms/StickyNote';
import BaseTemplate from './base';

const IndexTemplate: React.VFC = () => {
  return (
    <BaseTemplate>
      <StickyNote
        options={{
          initialPosition: { x: 128, y: 128 },
          initialSize: { x: 320, y: 240 },
          minimumSize: { x: 320, y: 240 },
        }}
      />
      <StickyNote
        options={{
          initialPosition: { x: 0, y: 0 },
          initialSize: { x: 320, y: 240 },
          minimumSize: { x: 320, y: 240 },
        }}
      />
    </BaseTemplate>
  );
};

export default IndexTemplate;
