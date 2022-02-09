import React from "react";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import SectionWrapper, { EventWrapper } from "./Events.style";

import { FeaturesData } from "common/data";
import CardSlider from "common/components/CardSlider";
const { title, items } = FeaturesData;

const Events = () => {
  return (
    <SectionWrapper id="service_section">
      <Heading className="header" fontSize="3.5rem" content={title} />
      <CardSlider>
        {items.map((item, index) => (
          <EventWrapper key={index} style={{ width: "29.438rem" }}>
            <NextImage src={item.icon} />
            <Text
              className="title"
              as="h3"
              color="#fff"
              fontSize="1.25rem"
              content={item.title}
            />
            <Text
              className="description"
              color="#fff"
              lineHeight="1.89"
              fontSize="0.875rem"
              content={item.description}
            />
            <Text
              className="date"
              as="h2"
              color="#fff"
              fontSize="2.188rem"
              content={item.date}
            />
          </EventWrapper>
        ))}
      </CardSlider>
    </SectionWrapper>
  );
};

export default Events;
