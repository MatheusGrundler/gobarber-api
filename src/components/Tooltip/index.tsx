import React from 'react';

import { Container } from './styles';

interface TooltipTprops {
  title: string
  className?: string;
}

const Tooltip: React.FC<TooltipTprops> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
}

export default Tooltip;
