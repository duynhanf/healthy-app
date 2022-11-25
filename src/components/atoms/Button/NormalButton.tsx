import styled from 'styled-components';

import React from 'react';

const Wrapper = styled.button`
  width: 296px;
  height: 56px;
  border: none;
  border-radius: 8px;

  background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);

  :hover {
    cursor: pointer;
  }
`;
interface Props {
  onClick?: () => void;
}

const NormalButton: React.FC<Props> = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export default NormalButton;
