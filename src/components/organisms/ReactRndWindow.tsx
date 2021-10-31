import React from 'react';
import { Rnd } from 'react-rnd';
import styled from 'styled-components';
import { ReactRndWindowOption } from '../../types/reactRndWindow';
import { classes } from '../../utils/classes';

type Props = {
  className?: string;
  children?: React.ReactNode;
  options: ReactRndWindowOption;
  onResizeStop?: (e: MouseEvent) => void;
  onDragStop?: (e: MouseEvent) => void;
};

const Root = styled(Rnd)``;

const ReactRndWindow: React.VFC<Props> = ({
  children,
  options,
  className,
  onResizeStop,
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
      minWidth={options.minimumSize.x}
      minHeight={options.minimumSize.y}
      bounds="parent"
      onResizeStop={onResizeStop}
      onDragStop={onDragStop}
    >
      {children}
    </Root>
  );
};

export default ReactRndWindow;
