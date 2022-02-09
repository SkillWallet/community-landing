import React, { useEffect, useState } from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import { Col, Row, BorderCol } from "./join-flow.style";
import SwCollapsible from "common/components/Collapsible";
import Slider, { createSliderWithTooltip } from "rc-slider";
import SwSlider from "common/components/Slider";

const Step2 = ({ control, values }) => {
  const [roles, setRoles] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleTriggerClick = (index) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(index);
    }
  };

  useEffect(() => {
    setRoles([
      {
        title: "Role 1",
      },
      {
        title: "Role 2",
      },
      {
        title: "Role 3",
      },
    ]);
  }, []);
  return (
    <Row>
      <Col className="left">
        <div>
          <Heading fontSize="3.75rem" as="h1" content="Step 2" />
          <Heading as="h3" fontSize="2.5rem" content="Role + Commitment" />
          <Text
            as="p"
            fontSize="1.188rem"
            content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor."
          />
        </div>
      </Col>
      <BorderCol>
        <span></span>
      </BorderCol>
      <Col className="right">
        {/* <SwSlider/> */}
        <SwSlider />
        {roles &&
          roles.map(({ title }, index) => {
            return (
              <SwCollapsible
                key={index + title}
                open={index === selectedIndex}
                tabIndex={index}
                accordionPosition={index}
                handleTriggerClick={handleTriggerClick}
                title={`Role ${index + 1}`}
              >
                <p>
                  This is the collapsible content. It can be any element or
                  React component you like.
                </p>
              </SwCollapsible>
            );
          })}
      </Col>
    </Row>
  );
};

export default Step2;
