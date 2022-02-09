import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { rgba } from 'polished';

const SectionWrapper = styled.section`
  padding: 5.438rem 0;
  overflow: hidden;
  background-color: #fff;

  .header {
    max-width: 95.688rem;
    text-align: center;
    width: 100%;
    margin: 0 auto 6.625rem auto;
  }
  
`;

export const EventWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;

  height: 33.278rem;
  background-color: #000;
  border-radius: 12px;
  padding: 3.563rem;

  img {
    height: 14.781rem;
    margin-bottom: 1.625rem !important;
  }

  h3 {
    margin-bottom: 1.688rem;
  }

  p {
    margin-bottom: 3.188rem;
  }

`;

export default SectionWrapper;
