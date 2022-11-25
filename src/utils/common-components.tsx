import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import React from 'react';

export const Grid = styled(({ tag, children, ...props }) =>
  React.createElement(tag, props, children)
)`
  display: flex;

  ${down('md')} {
    flex-direction: column;
  }
`;
