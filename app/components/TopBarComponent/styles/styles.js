import styled from 'styled-components';

const TopBarWrapper = styled.div`
  position: fixed;
  background-color: #bfbfbf;
  z-index: 10000;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LabelWrapper = styled.label`
  font-size: 15px;
  display: flex;
  flex-direction: row;
`;
const UsernameText = styled.div`
  font-size: 15px;
  position: absolute;
  right: 0;
  margin-right: 50px;
`;

export { TopBarWrapper, LabelWrapper, UsernameText };
