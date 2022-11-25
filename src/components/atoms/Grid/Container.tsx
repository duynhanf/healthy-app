import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;

  ${down('lg')} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Container: React.FC = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default Container;
