import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { notesState } from 'src/recoil/atoms/note';
import { Note } from 'src/types/note';

export const useNotesViewModel = (state: Note[]) => {
  const [notes, setNotes] = useRecoilState(notesState);

  useEffect(() => {
    setNotes(state);
  }, [state]);

  return { notes };
};
