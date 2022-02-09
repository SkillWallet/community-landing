import { BannerData } from 'common/data';
import styled from 'styled-components';
const BannerArea = styled.section`
  background-image: url(${BannerData?.image.src});
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 260px;
  padding-bottom: 235px;
  position: relative;
  @media (max-width: 1199px) {
    padding-top: 140px;
    padding-bottom: 140px;
  }
  @media (max-width: 575px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  .Container {
    display: flex;
  }
  h2 {
    font-weight: 500;
    font-size: 6.438rem;
    letter-spacing: -2px;
    color: #000;
    margin-bottom: 20px;
  }
  p {
    font-weight: normal;
    font-size: 1.188rem;
    line-height: 1.89;
    letter-spacing: 0;
    color: #000;
    margin-bottom: 0;
    max-width: 515px;
    opacity: 0.8;
    @media (max-width: 1600px) {
      max-width: 400px;
    }
  }
`;
export const Col = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  @media (max-width: 575px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

export default BannerArea;
