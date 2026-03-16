import styled, { css, keyframes } from "styled-components";

export const HomeContainer = styled.div`
  div:last-child {
    min-height: 170px;
  }
`;

export const Form = styled.form.attrs((props) => ({
  finded: props.finded,
}))`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 2px solid ${(props) => (props.finded ? "#aa000b" : "#eee")};
    padding: 10px 15px;
    border-radius: 4px;

    font-size: 18px;
    font-weight: bold;
    color: #555252;

    transition: border 0.25s ease-out;

    &::placeholder {
      font-size: 16px;
      font-weight: bold;
      color: #aaa5a5;
    }

    &:hover {
      transition: 0.2s;

      background: #f9f7f7;
    }
  }

  @media (max-width: 385px) {
    flex-direction: column;

    button {
      margin: 10px 0;
      height: 50px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  } to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: #aa000b;
  border: 0;
  padding-left: 15px;
  margin-left: 5px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}

  &:hover {
    transition: 0.2s;

    background: #d4000e;
  }
`;

export const Separator = styled.hr`
  border: 0;
  height: 1px;
  margin: 10px 0;
`;

export const HistoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 5px;
`;

export const ClearButton = styled.button`
  background: none;
  border: 0;
  color: #aa000b;
  cursor: pointer;
  padding: 4px 0px;
  margin-left: auto;
  border-radius: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: rgb(255, 0, 13);
    transition: 0.5s;
  }
`;

export const HistoryList = styled.ul`
  list-style: none;
  margin-top: 15px;
  padding: 0;
`;

export const RemoveItemButton = styled.button`
  background: none;
  border: 0;
  color: #aa000b;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  opacity: 0;
  transition:
    opacity 0.2s,
    background 0.2s;
  &:hover {
    color: rgb(255, 0, 13);
    transition: 0.5s;
  }
`;

export const HistoryItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f9f7f7;

    ${RemoveItemButton} {
      opacity: 1;
    }
  }

  strong {
    color: #aa000b;
    font-size: 14px;
    white-space: nowrap;
  }

  span {
    flex: 1;
    color: #555252;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
