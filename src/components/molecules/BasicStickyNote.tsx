import React from 'react';
import { useNoteViewModel } from 'src/hooks/note';
import { Matrix } from 'src/types';
import { Note } from 'src/types/note';
import styled from 'styled-components';
import BasicStickyNoteTextarea from '../atoms/BasicStickyNoteTextarea';
import ReactRndWindow from './ReactRndWindow';

type Props = {
  note: Note;
};

const Root = styled(ReactRndWindow)`
  border: 1px solid black;
`;

const BasicStickyNote: React.VFC<Props> = ({ note }) => {
  const MINIMUM_SIZE: Matrix = {
    x: 128,
    y: 128,
  };
  const noteViewModel = useNoteViewModel(note.id);

  return (
    <Root
      size={noteViewModel.size}
      position={noteViewModel.position}
      minimumSize={MINIMUM_SIZE}
      onResizeStart={noteViewModel.onResizeStart}
      onResizeStop={noteViewModel.onResizeStop}
      onDragStart={noteViewModel.onDragStart}
      onDragStop={noteViewModel.onDragStop}
    >
      <BasicStickyNoteTextarea
        value={noteViewModel.content}
        onChange={noteViewModel.onChangeContent}
      />
    </Root>
  );
};

export default BasicStickyNote;
