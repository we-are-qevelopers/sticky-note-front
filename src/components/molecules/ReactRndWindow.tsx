import React from 'react';
import { Rnd } from 'react-rnd';
import { Matrix } from 'src/types';
import { classes } from 'src/utils/classes';
import styled from 'styled-components';

type Props = {
  className?: string;
  children?: React.ReactNode;
  size: Matrix;
  minimumSize: Matrix;
  position: Matrix;
  onResizeStart: (e: MouseEvent) => void;
  onResizeStop: (e: MouseEvent) => void;
  onDragStart: (e: MouseEvent) => void;
  onDragStop: (e: MouseEvent) => void;
};

const Root = styled(Rnd)``;

const ReactRndWindow: React.VFC<Props> = ({
  children,
  className,
  size,
  minimumSize,
  position,
  onDragStart,
  onDragStop,
  onResizeStart,
  onResizeStop,
}) => {
  return (
    <Root
      className={classes(className)}
      default={{
        x: position.x,
        y: position.y,
        width: size.x,
        height: size.y,
      }}
      size={{ width: size.x, height: size.y }}
      position={position}
      minWidth={minimumSize.x}
      minHeight={minimumSize.y}
      bounds="parent"
      onResizeStart={onResizeStart}
      onResizeStop={onResizeStop}
      onDragStart={onDragStart}
      onDragStop={onDragStop}
    >
      {children}
    </Root>
  );
};

export default ReactRndWindow;
