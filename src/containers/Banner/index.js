import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import Box from 'common/components/Box';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import BannerArea, { Col } from './banner.style';
import { BannerData } from 'common/data';

const Banner = () => {
  const { title, text } = BannerData;
  return (
    <BannerArea id="banner_section">
      <Container className="Container">
        <Col>
          <Heading as="h2" content={title} />
          <Text as="p" content={text} />
        </Col>
      </Container>
    </BannerArea>
  );
};

export default Banner;
