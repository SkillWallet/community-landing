import React, { useEffect, useRef } from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import { Col, Row, BorderCol } from "./join-flow.style";
import QRCode from "easyqrcodejs";

const Step3 = ({ control, values }) => {
  const qrRef = useRef();

  useEffect(() => {
    const qrcode = new QRCode(qrRef.current, {
      width: 200,
      height: 200,
      crossOrigin: "anonymous",
      quietZone: 30,
      quietZoneColor: "#fff",
      text: "test",
      correctLevel: QRCode.CorrectLevel.H,
      format: "JPG",
      quality: 1,
      autoColor: true,
    });
  }, []);

  return (
    <Row>
      <Col className="left">
        <div>
          <Heading fontSize="3.75rem" as="h1" content="Step 3" />
          <Heading as="h3" fontSize="2.5rem" content="Scan & Claim" />
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
        <div ref={qrRef}></div>
      </Col>
    </Row>
  );
};

export default Step3;
