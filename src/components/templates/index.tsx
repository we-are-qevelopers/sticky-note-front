import React, { useEffect } from 'react';
import { useNotesViewModel } from 'src/hooks/notes';
import { Note } from 'src/types/note';
import StickyNotesRndArea from '../organisms/StickyNotesRndArea';
import BaseTemplate from './base';

type Props = {
  notes: Note[];
};

const IndexTemplate: React.VFC<Props> = ({ notes }) => {
  const notesViewModel = useNotesViewModel(notes);

  return (
    <BaseTemplate>
      <StickyNotesRndArea notes={notesViewModel.notes} />
    </BaseTemplate>
  );
};

export default IndexTemplate;
