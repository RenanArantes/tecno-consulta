import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form.attrs(props => ({
  finded: props.finded,
}))`
  margin-top: 30px;
  display:flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.finded ? '#ff6b6b' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;

    transition: border 0.25s ease-out;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);

  } to {
    transform: rotate(360deg);
  }
`

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #f01;
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

  ${props => props.loading && css`
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  `}
`;
