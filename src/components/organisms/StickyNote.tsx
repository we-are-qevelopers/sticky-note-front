import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor, EditorState, RichUtils, DraftEditorCommand } from 'draft-js';
import { colors } from '../../styles/variables';
import { ReactRndWindowOption } from '../../types/reactRndWindow';
import { useReactRndLayoutProvider } from '../../hooks/reactRnd';
import ReactRndWindow from './ReactRndWindow';
import 'draft-js/dist/Draft.css';

type Props = {
  options: ReactRndWindowOption;
};

const Root = styled(ReactRndWindow)`
  border: 1px solid ${colors.borderBlack};
`;

const StickyNote: React.VFC<Props> = ({ options }) => {
  const reactRndLayoutProvider = useReactRndLayoutProvider(options);
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
    <Root
      options={options}
      size={reactRndLayoutProvider.size}
      position={reactRndLayoutProvider.position}
      onResizeStart={e => reactRndLayoutProvider.onResizeStart(e)}
      onResizeStop={e => reactRndLayoutProvider.onResizeStop(e)}
      onDragStart={e => reactRndLayoutProvider.onDragStart(e)}
      onDragStop={e => reactRndLayoutProvider.onDragStop(e)}
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
