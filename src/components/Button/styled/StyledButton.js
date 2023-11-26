import styled from 'styled-components';

const StyledButton = styled.button`
  width: 100%;
  padding: 11px 0 11px 0;
  border-radius: 38px;
  border: none;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #e60012;
  box-shadow: 0px 2px #3333333f;
  cursor: pointer;
  transition: opacity 300ms;
  &:hover {
    opacity: 0.7;
  }
`;

export default StyledButton;
