import styled from "styled-components";
import { Link } from "react-router-dom";

export const RateLimitContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 0;

  svg {
    margin-bottom: 20px;
  }
`;

export const RateLimitMessage = styled.p`
  font-size: 16px;
  color: #555252;
  line-height: 1.6;
  margin: 15px 0 25px;
  max-width: 400px;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background: #aa000b;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: #d4000e;
  }
`;
