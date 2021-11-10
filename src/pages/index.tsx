import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { fetchNotesMockApiClient } from 'src/api/mocks/note';
import { notesState } from 'src/recoil/atoms/note';
import { Note } from 'src/types/note';
import IndexTemplate from '../components/templates';

type ServerSideProps = {
  notes: Note[];
};

const IndexPage: NextPage<ServerSideProps> = ({ notes }) => {
  const setNotes = useSetRecoilState(notesState);
  useEffect(() => {
    setNotes(notes);
  }, [notes]);

  return <IndexTemplate />;
};

export const getServerSideProps = async () => {
  try {
    const res = await fetchNotesMockApiClient();

    const props: ServerSideProps = {
      notes: res,
    };

    return { props };
  } catch (e) {
    console.error(e);

    const props: ServerSideProps = {
      notes: [],
    };

    return { props };
  }
};

export default IndexPage;
