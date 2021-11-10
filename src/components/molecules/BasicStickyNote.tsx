import React from 'react';
import { useReactRndLayoutProvider } from 'src/hooks/reactRnd';
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
    x: 320,
    y: 240,
  };
  const reactRndLayoutProvider = useReactRndLayoutProvider(
    note.size,
    note.position,
  );

  return (
    <Root
      size={reactRndLayoutProvider.size}
      position={reactRndLayoutProvider.position}
      minimumSize={MINIMUM_SIZE}
      onResizeStart={reactRndLayoutProvider.onResizeStart}
      onResizeStop={reactRndLayoutProvider.onResizeStop}
      onDragStart={reactRndLayoutProvider.onDragStart}
      onDragStop={reactRndLayoutProvider.onDragStop}
    >
      <BasicStickyNoteTextarea value={note.content} onChange={() => {}} />
    </Root>
  );
};

export default BasicStickyNote;
