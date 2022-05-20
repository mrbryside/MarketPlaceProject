import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoginButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
const LoginButton = styled(Link)`
  background-color: #504aff;
  color: white;
  padding: 15px;
  font-size: 12px;
  border: 0;
  border-radius: 5px;
  margin-top: 10px;
`;

const Input = styled.input`
  border: 1px solid grey;
  width: 300px;
  margin-top: 5px;
  padding: 15px;
  border-radius: 5px;
`;

export {
  LoginBoxWrapper,
  LoginContent,
  LoginButton,
  LoginButtonWrapper,
  Input,
};
