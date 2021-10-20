import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { exampleStringState } from '../../recoil/atoms/examples';
import ReactRndWindow from '../organisms/ReactRndWindow';
import BaseTemplate from './base';

const StyledReactRndWindow = styled(ReactRndWindow)`
  border: 1px solid #121212;
`;

const IndexTemplate: React.VFC = () => {
  const exampleString = useRecoilValue(exampleStringState);

  return (
    <BaseTemplate>
      <StyledReactRndWindow
        options={{
          initialPosition: { x: 128, y: 128 },
          initialSize: { x: 320, y: 240 },
          minimumSize: { x: 320, y: 240 },
        }}
      >
        IndexPage
        <input value={exampleString} />
      </StyledReactRndWindow>
    </BaseTemplate>
  );
};

export default IndexTemplate;
