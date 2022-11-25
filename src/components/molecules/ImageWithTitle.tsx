import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';
import { COLORS } from '@healthy-app/utils/common-colors';

const Wrapper = styled.div`
  position: relative;

  img {
    object-fit: cover;
  }

  :hover {
    opacity: 0.8;
    cursor: pointer;
  }

  ${down('md')} {
    img {
      width: 100%;
    }
  }
`;

const Description = styled.div`
  background-color: ${COLORS.Primary300};
  color: white;
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 120px;
  padding: 3px 8px;
  font-size: 15px;
  line-height: 18px;
`;

interface Props {
  image: string;
  description: string;
}

const ImageWithTitle: React.FC<Props> = ({ image, description, children }) => {
  return (
    <Wrapper>
      <img src={image} width={234} height={234} />
      <Description>{description}</Description>
      {children}
    </Wrapper>
  );
};

export default ImageWithTitle;
