import React from "react";
import Text from "common/components/Text";
import { LinkButton } from "common/components/Button";
import Container from "common/components/UI/Container";
import Link from "next/link";
import SectionWrapper, { Row, Col, BorderCol } from "./competitions.style";
import { CompetitionsData } from "common/data";

const { left, right } = CompetitionsData;

const Competitions = () => {
  return (
    <SectionWrapper>
      <Container>
        <Row>
          <Col className="left">
            <Text
              as="h1"
              color="#fff"
              fontSize="6.438rem"
              content={left.title}
            />
            <Text
              color="#fff"
              lineHeight="1.89"
              fontSize="1.188rem"
              content={left.text}
            />

            <Link href="/join">
              <LinkButton className="light" title={left.btnText} />
            </Link>
          </Col>
          <BorderCol>
            <span></span>
          </BorderCol>
          <Col className="right">
            <Text
              as="h1"
              color="#fff"
              fontSize="6.438rem"
              content={right.title}
            />
            <Text
              color="#fff"
              lineHeight="1.89"
              fontSize="1.188rem"
              content={right.text}
            />
            <Link href="/join">
              <LinkButton disabled className="light" title={right.btnText} />
            </Link>
          </Col>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Competitions;
