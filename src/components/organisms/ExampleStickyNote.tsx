import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';
import { colors } from '../../styles/variables';
import { ReactRndWindowOption } from '../../types/reactRndWindow';
import ReactRndWindow from './ReactRndWindow';
import 'draft-js/dist/Draft.css';

// This is experimental implementation.
// TODO: improve

type Props = {
  children?: React.ReactNode;
  options: ReactRndWindowOption;
};

const Root = styled(ReactRndWindow)`
  border: 1px solid ${colors.borderBlack};
`;

const ExampleStickyNote: React.VFC<Props> = ({ options, children }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  if (process.browser === false) {
    return null;
  }
  return (
    <Root options={options}>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </Root>
  );
};

export default ExampleStickyNote;
