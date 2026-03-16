import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  margin: 15px 15px 25px 10px;
  display: flex;
  align-items: center;

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

export const BackButton = styled(Link)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 4px;
  transition: background 0.2s;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export default Container;
