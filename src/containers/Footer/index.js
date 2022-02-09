import React from 'react';
import Link from 'next/link';
import NextImage from 'common/components/NextImage';
import Logo from 'common/components/UIElements/Logo';
import Container from 'common/components/UI/Container';
import FooterArea, {
  Left,
  Menu,
  CopyText,
  Social,
  SocialText,
} from './footer.style';
import { FooterData } from 'common/data';

const Footer = () => {
  const { menu, logo, social } = FooterData;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container className="Container">
        <Left>
          <Logo
            className="logo"
            href="/"
            logoSrc={logo}
            title="Skillwallet"
          />
        </Left>
        <CopyText>
            Copyright © {year}, SkillWallet. 
          </CopyText>
        <Social>
          {social.map(({ link, icon }, index) => (
            <Link href={link} key={`footer-social-key-${index}`}>
              <a target="_blank">
                <NextImage src={icon} alt="social image" />
              </a>
            </Link>
          ))}
        </Social>
      </Container>
    </FooterArea>
  );
};

export default Footer;
