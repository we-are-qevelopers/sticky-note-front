import React, { useEffect, useState } from 'react';
import BaseTemplate from 'src/components/templates/base/index';
import { Board1View } from 'src/components/templates/board1/view';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';

export const Board1Template: React.VFC = () => {
  const [editorEnable, setEditorEnable] = useState(false);

  const [STNote, setSTNote] = useState({
    groupID: '1',
    groupName: 'サンプルグループ',
    notes: [
      {
        noteID: '1',
        noteName: '',
        content: 'aaa',
        width: 200,
        height: 300,
        x: 20,
        y: 40,
        draftState: EditorState.createWithContent(
          convertFromRaw({
            entityMap: {},
            blocks: [
              {
                key: 'xxxxxx', // ユニークなキー値
                text: 'ここに初期テキストがはいります。', // 任意のテキスト
                type: 'unstyled', // テキストのタイプ。初期値は "unstyled"
                depth: 0,
                entityRanges: [],
                inlineStyleRanges: [],
                data: {},
              },
            ],
          }),
        ),
      },
      {
        noteID: '2',
        noteName: '',
        content: 'bbb',
        width: 400,
        height: 200,
        x: 50,
        y: 70,
        draftState: EditorState.createWithContent(
          convertFromRaw({
            entityMap: {},
            blocks: [
              {
                key: 'xxxxxx', // ユニークなキー値
                text: 'text2', // 任意のテキスト
                type: 'unstyled', // テキストのタイプ。初期値は "unstyled"
                depth: 0,
                entityRanges: [],
                inlineStyleRanges: [],
                data: {},
              },
            ],
          }),
        ),
      },
    ],
  });

  useEffect(() => {
    const tempInitSTNote = localStorage.getItem('STNote') || '';
    try {
      console.log(JSON.parse(tempInitSTNote));
      const parsedData = JSON.parse(tempInitSTNote);
      const dataForState = {
        ...parsedData,
        notes: [
          ...parsedData.notes.map((v: any) => {
            console.log(v);
            return {
              ...v,
              draftState: EditorState.createWithContent(
                convertFromRaw(v.draftState),
              ),
            };
          }),
        ],
      };
      setSTNote(dataForState);
    } catch (err) {
      console.log(err);
    }

    setEditorEnable(true);
  }, []);

  const STNoteResize = (noteID: string, e: any, d: any) => {
    console.log(noteID);
    setSTNote(current => {
      const newNotes = current.notes.map(x => {
        if (x.noteID === noteID) return { ...x, x: d.x, y: d.y };
        else return x;
      });
      return { ...current, notes: newNotes };
    });
  };

  const editorOnChange = (noteID, editorState) => {
    const newSTNote = {
      ...STNote,
      notes: [
        ...STNote.notes.map(v => {
          if (v.noteID === noteID) {
            return {
              ...v,
              draftState: editorState,
            };
          } else return v;
        }),
      ],
    };
    // ローカルストレージに格納するための変換
    const dataForStorage = {
      ...STNote,
      notes: [
        ...STNote.notes.map(v => {
          if (v.noteID === noteID) {
            return {
              ...v,
              draftState: convertToRaw(editorState.getCurrentContent()),
            };
          } else {
            return {
              ...v,
              draftState: convertToRaw(v.draftState.getCurrentContent()),
            };
          }
        }),
      ],
    };
    // const contentState = this.state.editorState.getCurrentContent();
    // const content = convertToRaw(contentState);
    console.log('editer onChange');
    localStorage.setItem('STNote', JSON.stringify(dataForStorage));
    setSTNote(newSTNote);
  };
  const viewProps = {
    STNote,
    setSTNote,
    editorEnable,
    STNoteResize,
    editorOnChange,
  };

  return (
    <BaseTemplate>
      <Board1View {...viewProps} />
    </BaseTemplate>
  );
};
