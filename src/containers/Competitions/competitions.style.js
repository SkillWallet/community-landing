import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding: 75px 0 180px;
  background-color: #000;
  @media (max-width: 1600px) {
    padding-top: 6.5rem;
    padding-bottom: 6.5rem;
  }
`;


export const Row = styled.div`
  display: flex;
  
`
export const Col = styled.div`
  flex: 49%;
  display: flex;
  flex-direction: column;

  &.left {
    align-items: flex-start;
  }

  &.right {
    align-items: flex-end;
    text-align: end;
  }

  p {
    max-width: 37.5rem;
    margin-top: 3.1rem;
    margin-bottom: 5.25rem !important;
  }
`

export const BorderCol = styled.div`
  flex: 2%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10rem;

  & > span {
    width: 1px;
    height: 33.813rem;
    background: white;
  }
`

export default SectionWrapper;
