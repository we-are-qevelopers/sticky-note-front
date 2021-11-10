import React from 'react';
import { classes } from 'src/utils/classes';
import styled from 'styled-components';

type Props = {
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const Root = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
`;

const BasicStickyNoteTextarea: React.VFC<Props> = ({
  value,
  onChange,
  className,
}) => {
  return (
    <Root
      value={value}
      onChange={e => onChange(e.target.value)}
      className={classes(className)}
    />
  );
};

export default BasicStickyNoteTextarea;
