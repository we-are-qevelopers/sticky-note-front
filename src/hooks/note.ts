import { useMemo, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { notesState } from 'src/recoil/atoms/note';
import { Matrix } from 'src/types';
import { isAvailableWindow } from 'src/utils/window';

export const useNoteViewModel = (id: number) => {
  const notes = useRecoilValue(notesState);
  const note = useMemo(() => {
    return notes.find(note => note.id === id);
  }, [notes, id]);

  const [size, setSize] = useState(note.size);
  const [position, setPosition] = useState(note.position);
  const [content, setContent] = useState(note.content);
  const [mousedownPosition, setMousedownPosition] = useState<Matrix | null>(
    null,
  );

  // const vertex = useMemo<Vertex>(() => {
  //   return {
  //     topLeft: position,
  //     topRight: {
  //       x: position.x + size.x,
  //       y: position.y,
  //     },
  //     bottomLeft: {
  //       x: position.x,
  //       y: position.y + size.y,
  //     },
  //     bottomRight: {
  //       x: position.x + size.x,
  //       y: position.y + size.y,
  //     },
  //   };
  // }, [size, position]);

  const onDragStart = (e: MouseEvent) => {
    setMousedownPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const onDragStop = (e: MouseEvent) => {
    const innerWidth = isAvailableWindow ? window.innerWidth : 0;
    const innerHeight = isAvailableWindow ? window.innerHeight : 0;

    const movement: Matrix = {
      x: e.pageX - mousedownPosition.x,
      y: e.pageY - mousedownPosition.y,
    };

    const newPosition: Matrix = {
      x: position.x + movement.x,
      y: position.y + movement.y,
    };

    if (newPosition.x < 0) {
      newPosition.x = 0;
    } else if (newPosition.x > innerWidth - size.x) {
      newPosition.x = innerWidth - size.x;
    }

    if (newPosition.y < 0) {
      newPosition.y = 0;
    } else if (newPosition.y > innerHeight - size.y) {
      newPosition.y = innerHeight - size.y;
    }

    setPosition(newPosition);
  };

  const onResizeStart = (e: MouseEvent) => {
    setMousedownPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };

  const onResizeStop = (e: MouseEvent) => {
    const innerWidth = isAvailableWindow ? window.innerWidth : 0;
    const innerHeight = isAvailableWindow ? window.innerHeight : 0;

    const movement: Matrix = {
      x: e.pageX - mousedownPosition.x,
      y: e.pageY - mousedownPosition.y,
    };

    const newSize: Matrix = {
      x: size.x + movement.x,
      y: size.y + movement.y,
    };

    if (newSize.x < 0) {
      newSize.x = 0;
    } else if (newSize.x + position.x > innerWidth) {
      newSize.x = innerWidth - position.x;
    }

    if (newSize.y < 0) {
      newSize.y = 0;
    } else if (newSize.y + position.y > innerHeight) {
      newSize.y = innerHeight - position.y;
    }

    setSize(newSize);
  };

  const onChangeContent = (value: string) => {
    setContent(value);
  };

  return {
    size,
    position,
    content,
    onChangeContent,
    onResizeStart,
    onResizeStop,
    onDragStart,
    onDragStop,
  };
};
