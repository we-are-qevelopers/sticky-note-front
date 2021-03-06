import React from 'react';
import { Note } from 'src/types/note';
import styled from 'styled-components';
import BasicStickyNote from '../molecules/BasicStickyNote';

type Props = {
  notes: Note[];
};

const Root = styled.main`
  display: inline-block;
  width: 100%;
  height: 100%;
`;

const StickyNotesRndArea: React.VFC<Props> = ({ notes }) => {
  return (
    <Root>
      {notes.map((note, index) => (
        <BasicStickyNote note={note} key={index} />
      ))}
    </Root>
  );
};

export default StickyNotesRndArea;
