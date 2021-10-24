import React from 'react';
import { useRecoilValue } from 'recoil';
import { exampleStringState } from '../../recoil/atoms/examples';
import ExampleStickyNote from '../organisms/ExampleStickyNote';
import BaseTemplate from './base';

const IndexTemplate: React.VFC = () => {
  const exampleString = useRecoilValue(exampleStringState);
  console.log(exampleString);

  return (
    <BaseTemplate>
      <ExampleStickyNote
        options={{
          initialPosition: { x: 128, y: 128 },
          initialSize: { x: 320, y: 240 },
          minimumSize: { x: 320, y: 240 },
        }}
      />
    </BaseTemplate>
  );
};

export default IndexTemplate;
