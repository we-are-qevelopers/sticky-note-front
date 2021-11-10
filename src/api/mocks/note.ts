import { Note } from 'src/types/note';

const dummyNotes: Note[] = [
  {
    id: 0,
    content: 'hoge',
    position: { x: 320, y: 240 },
    size: { x: 320, y: 240 },
    createdAt: '2021/11/10 15:53',
    updatedAt: '2021/11/10 15:53',
  },
  {
    id: 1,
    content: 'fuga',
    position: { x: 128, y: 128 },
    size: { x: 128, y: 128 },
    createdAt: '2021/11/10 15:54',
    updatedAt: '2021/11/10 15:54',
  },
  {
    id: 2,
    content: 'piyo',
    position: { x: 480, y: 240 },
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
