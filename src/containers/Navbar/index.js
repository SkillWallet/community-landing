import React from 'react';
import PropTypes from 'prop-types';
import NavbarWrapper from 'common/components/Navbar';
import Logo from 'common/components/UIElements/Logo';
import Box from 'common/components/Box';
import Container from 'common/components/UI/Container';
import LogoImageStick from 'common/assets/image/header-logo.svg';

const Navbar = ({ navbarStyle, logoStyle, row , hideAuth}) => {
  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImageStick}
            title="Agency"
            logoStyle={logoStyle}
            className="main-logo"
          />
          <Logo
            href="/"
            logoSrc={LogoImageStick}
            title="Agency"
            logoStyle={logoStyle}
            className="stricky-logo"
          />
          {!hideAuth && <sw-auth use-dev="true"></sw-auth>}
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'sassminimal_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['126px', '126px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
