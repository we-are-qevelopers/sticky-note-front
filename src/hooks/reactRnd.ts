import { useEffect, useState } from 'react';
import { Matrix } from '../types';
import { isAvailableWindow } from '../utils/window';

export const useReactRndLayoutProvider = (
  initialSize: Matrix,
  initialPosition: Matrix,
) => {
  const [size, setSize] = useState<Matrix>({
    x: initialSize.x,
    y: initialSize.y,
  });
  const [position, setPosition] = useState<Matrix>({
    x: initialPosition.x,
    y: initialPosition.y,
  });
  const [mousedownPosition, setMousedownPosition] = useState<Matrix | null>(
    null,
  );

  useEffect(() => {
    console.log(size);
    console.log(position);
  }, [size, position]);

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

  return {
    size,
    position,
    onDragStart,
    onDragStop,
    onResizeStart,
    onResizeStop,
  };
};
