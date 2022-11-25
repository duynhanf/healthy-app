import React from 'react';
import styled from 'styled-components';

const HexagonButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
  color: #fff;
  width: 116px;
  height: 134px;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  clip-path: polygon(50% 0%, 100% 20%, 100% 80%, 50% 100%, 0% 80%, 0% 20%);
  background: linear-gradient(65.89deg, #ffcc21 8.26%, #ff963c 91.18%);

  background-repeat: no-repeat;
  transition: background-position-y ease-in-out 250ms;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const HexagonButton: React.FC = ({ children, ...props }) => {
  return <HexagonButtonWrapper {...props}>{children}</HexagonButtonWrapper>;
};

export default HexagonButton;
