import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { down } from 'styled-breakpoints';

import { ReactComponent as Logo } from '@healthy-app/assets/logo.svg';
import Container from '@healthy-app/components/atoms/Grid/Container';
import SideMenu from '@healthy-app/components/molecules/SideMenu';
import { MENUS } from '@healthy-app/utils/common-constants';
import { COLORS } from '@healthy-app/utils/common-colors';

const MainMenu = styled.ul``;

const HeaderWrapper = styled.div`
  background-color: ${COLORS.Dark500};
  color: white;
  padding: 16px 0 8px 0;

  li {
    padding-left: 24px;
    a {
      display: flex;
      align-items: center;
    }
  }

  ${down('md')} {
    ${MainMenu} {
      display: none;
    }
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 32px;
`;

const Icon = styled(({ Icon, ...props }) => <Icon {...props} />)`
  margin-right: 8px;
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <StyledContainer>
        <Link to="/">
          <Logo />
        </Link>
        <RightContainer>
          <MainMenu>
            {MENUS.map(({ icon, label, url, notificationCount }, idx) => (
              <li key={idx}>
                <Link to={url}>
                  <Icon Icon={icon} notificationcount={notificationCount} />{' '}
                  {label}
                </Link>
              </li>
            ))}
          </MainMenu>
          <SideMenu />
        </RightContainer>
      </StyledContainer>
    </HeaderWrapper>
  );
};

export default Header;
