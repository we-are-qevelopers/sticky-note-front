import React, { CSSProperties } from 'react';
import { Rnd } from 'react-rnd';
import { Editor } from 'draft-js';
import 'draft-js/dist/Draft.css'; // 暫定

// todo:型付け
type Props = {
  STNote;
  setSTNote;
  editorEnable;
  STNoteResize;
  editorOnChange;
};

// 暫定
const style: CSSProperties = {
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
} as const;

export const Board1View = ({
  STNote,
  setSTNote,
  editorEnable,
  STNoteResize,
  editorOnChange,
}: Props) => {
  return (
    <>
      {STNote.notes.map((note: any) => {
        const noteID = note.noteID;

        return (
          <Rnd
            key={note.noteID}
            style={style}
            size={{ width: note.width, height: note.height }}
            position={{ x: note.x, y: note.y }}
            onDragStop={(e, d) => STNoteResize(noteID, e, d)}
            // todo: onResizeStop
            onResizeStop={(e, direction, ref, delta, position) => {
              // setNote1({
              //   ...note1,
              //   width: ref.offsetWidth,
              //   height: ref.offsetHeight,
              // });
              // console.log(e, direction, ref, delta, position);
            }}
          >
            NoteID:{note.noteID}
            {editorEnable && (
              <>
                <Editor
                  editorKey="test-key"
                  editorState={note.draftState}
                  onChange={editorState => editorOnChange(noteID, editorState)}
                  //   handleKeyCommand={handleKeyCommand}
                  onBlur={() => {
                    console.log('onblue');
                  }}
                  // keyBindingFn={myKeyBindingFn}
                />
              </>
            )}
          </Rnd>
        );
      })}
    </>
  );
};
