import styled from "styled-components";

import bannerMoc from "common/assets/image/join-flow-bg.svg";

const JoinFlowArea = styled.section`
  background-image: url(${bannerMoc.src});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 140px;
  padding-bottom: 80px;
  position: relative;

  .form-field {
    display: flex;
    flex-direction: column;

    + .form-field {
      margin-top: 2.375rem;
    }

    .upload-wrapper {
      max-width: 310px;
    }
    .sw-uploader-wrapper {
      margin: 0 auto;
    }
  }

  .submit-btn {
    display: flex;
    justify-content: center;
    margin-top: 3.625rem;

    button {
      width: 21.5rem;
      height: 4.677rem;
      min-width: 21.5rem;
      min-height: 4.677rem;
      font-size: 1.25rem;
    }
  }
`;

export const StepperDots = styled.div`
  max-width: 28.521rem;
  margin: 0 auto 3.625rem auto;
  &.stepper-dots {
    width: 100%;
    display: flex;
    align-items: center;

    .stepper-dot {
      height: 2.25rem;
      width: 2.25rem;
      border-radius: 50%;
      border: 2px solid #000;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: #fff;

      &.active {
        background-color: #000;
        border-color: #fff;
      }
    }

    .stepper-line {
      border-top: 3px solid #000;
      flex: 1;
    }
  }

  .stepper-top {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    top: 0px;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Row = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
`;
export const Col = styled.div`
  flex: 49%;
  display: flex;
  flex-direction: column;
  

  &.left {
    align-items: flex-end;
    p {
      max-width: 33.813rem;
      margin-top: 2.813rem;
      line-height: 1.89;
    }
  }

  &.right {
    justify-content: center;
  }
`;

export const BorderCol = styled.div`
  flex: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10rem;

  & > span {
    width: 1px;
    height: 33.813rem;
    background: #000;
  }
`;

export default JoinFlowArea;
