import React, { Fragment, useEffect, useState } from "react";
import Container from "common/components/UI/Container";
import JoinFlowArea, { StepperDots } from "./join-flow.style";
import Step1 from "./step1";
import Icon from "react-icons-kit";
import { ic_done } from "react-icons-kit/md/ic_done";
import Button from "common/components/Button";
import { useForm } from "react-hook-form";
import Step2 from "./step2";
import Step3 from "./step3";

const JoinFlow = () => {
  const [steps, setSteps] = useState([]);
  const [activeStep, setActiveStep] = useState(1);

  const { control, handleSubmit, watch } = useForm({
    mode: "onChange",
  });

  const values = watch();

  const goToStep = (step) => {
    if (step < activeStep) {
      setActiveStep(step);
    }
    return false;
  };

  const getSubmitBtnText = () => {
    switch (activeStep) {
      case 0:
        return "Next: Pick your Role";
      case 1:
        return "Next: Claim your Membership";
      case 2:
        return null;
    }
  };

  const onSubmit = (data) => {
    setActiveStep(activeStep + 1);

    return false;
  };

  const onError = (data) => {
    // error
  };

  useEffect(() => {
    setSteps([0, 1, 2]);
  }, []);

  return (
    <JoinFlowArea id="JoinFlow_section">
      <Container className="Container">
        <form autoComplete="off" onSubmit={handleSubmit(onSubmit, onError)}>
          <StepperDots key="stepper-dots" className="stepper-dots">
            {steps.map((_, index) => {
              return (
                <Fragment key={index}>
                  <div
                    onClick={() => goToStep(index)}
                    className={`stepper-dot ${
                      index === activeStep ? "active" : ""
                    }`}
                  >
                    {index < activeStep && <Icon icon={ic_done} />}
                  </div>
                  {steps.length - 1 !== index && (
                    <div className="stepper-line" />
                  )}
                </Fragment>
              );
            })}
          </StepperDots>
          {activeStep === 0 && <Step1 values={values} control={control} />}
          {activeStep === 1 && <Step2 values={values} control={control} />}
          {activeStep === 2 && <Step3 values={values} control={control} />}
          <div className="submit-btn">
            {getSubmitBtnText() && (
              <Button
                type="submit"
                className="dark"
                title={getSubmitBtnText()}
              />
            )}
          </div>
        </form>
      </Container>
    </JoinFlowArea>
  );
};

export default JoinFlow;
