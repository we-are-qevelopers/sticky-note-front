import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';
import { colors } from '../../styles/variables';
import { ReactRndWindowOption } from '../../types/reactRndWindow';
import ReactRndWindow from './ReactRndWindow';

type Props = {
  options: ReactRndWindowOption;
};

const Root = styled(ReactRndWindow)`
  border: 1px solid ${colors.borderBlack};
`;

const StickyNote: React.VFC<Props> = ({ options }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onResizeStop = (e: MouseEvent) => {
    console.log(e);
  };

  const onDragStop = (e: MouseEvent) => {
    console.log(e);
  };

  if (process.browser === false) {
    return null;
  }
  return (
    <Root
      options={options}
      onResizeStop={e => onResizeStop(e)}
      onDragStop={e => onDragStop(e)}
    >
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
      />
    </Root>
  );
};

export default StickyNote;
