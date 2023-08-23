import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
  align-items: center;
`;

export const Delete = styled.button`
  margin-left: 40px;
  border-color: #ccc;
  border-radius: 4px;
font-size: 16px;

 &:hover {
    background-color: #449cf4;
    border-color: #449cf4;
    color: white;
`;
