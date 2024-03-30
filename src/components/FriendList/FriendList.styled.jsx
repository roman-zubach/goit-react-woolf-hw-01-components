import styled from '@emotion/styled';

export const List = styled.div`
  display: flex;
  flex-direction: column;

  width: ${props => props.theme.spacing(150)};
  margin-left: auto;
  margin-right: auto;
  gap: 10px;
`;
