import styled, { keyframes, css } from 'styled-components';

export const HomeContainer = styled.div`
  div:last-child {
    min-height: 170px;
  }
`

export const Form = styled.form.attrs((props) => ({
  finded: props.finded,
}))`
  margin-top: 30px;
  display:flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 2px solid ${(props) => (props.finded ? '#aa000b' : '#eee')};
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
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  } to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
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

  ${(props) => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}

  &:hover {
    transition: 0.2s;

    background: #d4000e;
  }
`;
