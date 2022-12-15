import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #f9f7f7;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  margin: 10px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
  }

  svg {
    margin-right: 10px;
  }

  hr {
    margin-top: 5px;
    margin-bottom: 1px;
  }

  &:hover {
    transition: 0.2s;

    background: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);

    @media print {       
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    }
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: black;
  }

  a:hover {
    transition: 0.2s;

    color: #808080;
  }
`;

export default Container;
