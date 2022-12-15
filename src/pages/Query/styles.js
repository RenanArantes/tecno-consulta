import styled from 'styled-components';

export const QueryContainer = styled.div``

export const Field = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 9px 0;

  li {
    margin-left: 35px;
    list-style: inside ;
  }
`

export const Separator = styled.hr`
  margin-bottom: 13px !important;
`

export const FieldList = styled.ol`
  li {
    margin-left: 15px;
    list-style-position: inside;
    list-style-type: upper-roman;
  }
`;

export const Value = styled.strong`
  margin-left: 3px;
`;
