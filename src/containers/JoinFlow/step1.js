import React from "react";
import Heading from "common/components/Heading";
import Text from "common/components/Text";
import { Col, Row, BorderCol } from "./join-flow.style";
import Input from "common/components/Input";
import SwUploadFile from "common/components/FileUpload";
import { Controller } from "react-hook-form";

const Step1 = ({ control, values }) => {
  return (
    <Row>
      <Col className="left">
        <div>
          <Heading fontSize="3.75rem" as="h1" content="Step 1" />
          <Heading as="h3" fontSize="2.5rem" content="Nickname & Avatar" />
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
        <div className="form-field">
          <Text
            as="span"
            fontWeight="bold"
            fontSize="1.5rem"
            content="Nickname"
          />
          <Text
            as="span"
            fontSize="1.188rem"
            content="What would you like your community to call you?"
          />
          <Controller
            name="name"
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { name, value, onChange } }) => {
              return (
                <Input
                  required
                  autoFocus
                  defaultValue={value || ""}
                  name={name}
                  value={value || ""}
                  onChange={onChange}
                  placeholder="Required Field"
                />
              );
            }}
          />
        </div>

        <div className="form-field">
          <Text
            as="span"
            fontWeight="bold"
            fontSize="1.5rem"
            content="Nickname"
          />
          <Text
            as="span"
            fontSize="1.188rem"
            content="What would you like your community to call you?"
          />
          <div className="upload-wrapper">
          <Controller
            name="avatar"
            control={control}
            rules={{ required: true }}
            render={({ field: { name, value, onChange } }) => {
              return (
                <SwUploadFile
                  name={name}
                  initialPreviewUrl={value ? URL.createObjectURL(value) : null}
                  fileChange={onChange}
                />
              );
            }}
          />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Step1;
