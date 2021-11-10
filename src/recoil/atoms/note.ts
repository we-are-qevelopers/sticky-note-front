import { atom } from 'recoil';
import { Note } from 'src/types/note';
import { recoilKeys } from '..';

export const notesState = atom<Note[]>({
  key: recoilKeys.atoms.NOTES,
  default: [],
});
