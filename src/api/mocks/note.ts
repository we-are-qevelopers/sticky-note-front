import { Note } from 'src/types/note';

const dummyNotes: Note[] = [
  {
    id: 0,
    content: 'hoge',
    position: { x: 558, y: 97 },
    size: { x: 128, y: 128 },
    createdAt: '2021/11/10 15:53',
    updatedAt: '2021/11/10 15:53',
  },
  {
    id: 1,
    content: 'fuga',
    position: { x: 312, y: 284 },
    size: { x: 240, y: 320 },
    createdAt: '2021/11/10 15:54',
    updatedAt: '2021/11/10 15:54',
  },
  {
    id: 2,
    content: 'piyo',
    position: { x: 621, y: 286 },
    size: { x: 480, y: 240 },
    createdAt: '2021/11/10 15:55',
    updatedAt: '2021/11/10 15:55',
  },
];

export const fetchNoteMockApiClient = async () => {
  return dummyNotes[0];
};

export const fetchNotesMockApiClient = async () => {
  return dummyNotes;
};
