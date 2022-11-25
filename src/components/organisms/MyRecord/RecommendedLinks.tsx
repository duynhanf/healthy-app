import React from 'react';
import styled from 'styled-components';
import { down } from 'styled-breakpoints';

import { Grid } from '@healthy-app/utils/common-components';
import { Link } from 'react-router-dom';
import { COLORS } from '@healthy-app/utils/common-colors';

const Wrapper = styled(Grid)`
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 48px;
  margin-top: 56px;
`;

const RecommendedColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  background-color: ${COLORS.Primary300};
  padding: 24px;
  position: relative;

  h3 {
    font-size: 25px;
    line-height: 30px;
    color: ${COLORS.Primary300};
    text-transform: uppercase;
    margin: 0;
  }

  p {
    color: white;
    background-color: ${COLORS.Primary400};
    height: 24px;
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    padding: 3px 8px;
  }
`;

const Mask = styled.div`
  position: absolute;
  height: calc(100% - 48px);
  width: calc(100% - 48px);
  background-color: #000000;
  opacity: 0.5;
`;

const RecommendedText = styled.div`
  position: absolute;
  top: 24px;
  height: calc(100% - 48px);
  width: calc(100% - 48px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;

  ${down('md')} {
    width: 100%;
  }
`;

interface Props {
  links: Link[];
}
interface Link {
  label: string;
  description: string;
  image: string;
}

const RecommendedLinks: React.FC<Props> = ({ links }) => {
  return (
    <Wrapper tag="div">
      {links.map(({ label, description, image }, idx) => (
        <Link to="/columns" key={idx}>
          <RecommendedColumn>
            <StyledImage src={image} alt={label} />
            <Mask />
            <RecommendedText>
              <h3>{label}</h3>
              <p>{description}</p>
            </RecommendedText>
          </RecommendedColumn>
        </Link>
      ))}
    </Wrapper>
  );
};

export default RecommendedLinks;
