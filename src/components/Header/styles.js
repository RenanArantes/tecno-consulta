import styled from 'styled-components';

export const Container = styled.div`
  margin: 15px 15px 25px 10px;
  display: flex;
  align-items: center;
  align-self: center;

  color: white;

  @media print {
    color: black;
  }

  img {
    max-width: 50px;
    height: auto;

    margin-right: 15px;
  }

  h1, h2 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }
`;

export default Container;
