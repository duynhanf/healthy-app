import React from 'react';
import styled from 'styled-components';
import { NormalButton } from '../atoms/Button';

const StyledButton = styled(NormalButton)`
  margin: 0 auto;
  display: block;
  margin-top: 56px;
`;
interface Props {
  onClick?: () => void;
  text: string;
}

const LoadMoreButton: React.FC<Props> = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

export default LoadMoreButton;
