import styled from 'styled-components';

const WrapperBox = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100%;
  overflow: visible;
  background-color: white;
`;
const CartButton = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 100px;
  height: 100px;
  background-color: #2bc0ff;
  border-radius: 50px;
  margin: 40px;
  z-index: 9999;
  cursor: pointer;
`;
const CartAddNumber = styled.div`
  background-color: red;
  position: absolute;
  width: auto;
  min-width: 25px;
  text-align: center;
  border-radius: 20px;
  padding: 2px 5px 2px 5px;
  font-size: 20px;
  color: white;
`;
const CartIconWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartIconImage = styled.img`
  width: 45px;
  height: 50px;
  margin-right: 7px;
  margin-bottom: 2px;
`;
const LoadingWrapper = styled.div`
  display: flex;
  margin-top: 500px;
  justify-content: center;
  align-items: center;
`;

export {
  WrapperBox,
  CartButton,
  CartAddNumber,
  CartIconWrapper,
  CartIconImage,
  LoadingWrapper,
};
