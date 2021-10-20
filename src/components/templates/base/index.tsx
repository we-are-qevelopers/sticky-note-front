import React from 'react';
import { PageRoot } from '../../../styles/components';

type Props = {
  children?: React.ReactNode;
};

const BaseTemplate: React.VFC<Props> = ({ children }) => {
  return <PageRoot>{children}</PageRoot>;
};

export default BaseTemplate;
