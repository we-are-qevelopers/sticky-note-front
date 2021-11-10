import React from 'react';
import { useRecoilValue } from 'recoil';
import { notesState } from 'src/recoil/atoms/note';
import StickyNotesRndArea from '../organisms/StickyNotesRndArea';
import BaseTemplate from './base';

const IndexTemplate: React.VFC = () => {
  const notes = useRecoilValue(notesState);

  return (
    <BaseTemplate>
      <StickyNotesRndArea notes={notes} />
    </BaseTemplate>
  );
};

export default IndexTemplate;
