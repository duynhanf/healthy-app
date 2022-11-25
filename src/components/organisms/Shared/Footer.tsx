import React from 'react';
import styled from 'styled-components';

import Container from '@healthy-app/components/atoms/Grid/Container';
import { Grid } from '@healthy-app/utils/common-components';
import { COLORS } from '@healthy-app/utils/common-colors';

const FooterWrapper = styled.div`
  background-color: ${COLORS.Dark500};
  color: white;
  padding: 56px 0 56px 0;
  margin-top: 64px;

  ul {
    flex-wrap: wrap;
  }

  ul li {
    padding-right: 24px;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <StyledContainer>
        <Grid tag="ul">
          <li>会員登録</li>
          <li>運営会社</li>
          <li>利用規約</li>
          <li>個人情報の取扱について</li>
          <li>特定商取引法に基づく表記</li>
          <li>お問い合わせ</li>
        </Grid>
      </StyledContainer>
    </FooterWrapper>
  );
};

export default Footer;
