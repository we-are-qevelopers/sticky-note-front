import { NextPage } from 'next';
import React from 'react';
import { fetchNotesMockApiClient } from 'src/api/mocks/note';
import { Note } from 'src/types/note';
import IndexTemplate from '../components/templates';

type ServerSideProps = {
  notes: Note[];
};

const IndexPage: NextPage<ServerSideProps> = ({ notes }) => {
  return <IndexTemplate notes={notes} />;
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
