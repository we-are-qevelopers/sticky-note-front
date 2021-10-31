import React from 'react';
import { Rnd } from 'react-rnd';
import styled from 'styled-components';
import { Matrix } from '../../types';
import { ReactRndWindowOption } from '../../types/reactRndWindow';
import { classes } from '../../utils/classes';

type Props = {
  className?: string;
  children?: React.ReactNode;
  options: ReactRndWindowOption;
  size: Matrix;
  position: Matrix;
  onResizeStart: (e: MouseEvent) => void;
  onResizeStop: (e: MouseEvent) => void;
  onDragStart: (e: MouseEvent) => void;
  onDragStop: (e: MouseEvent) => void;
};

const Root = styled(Rnd)``;

const ReactRndWindow: React.VFC<Props> = ({
  children,
  options,
  className,
  size,
  position,
  onResizeStart,
  onResizeStop,
  onDragStart,
  onDragStop,
}) => {
  return (
    <Root
      className={classes(className)}
      default={{
        x: options.initialPosition.x,
        y: options.initialPosition.y,
        width: options.initialSize.x,
        height: options.initialSize.y,
      }}
      size={size}
      position={position}
      minWidth={options.minimumSize.x}
      minHeight={options.minimumSize.y}
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
