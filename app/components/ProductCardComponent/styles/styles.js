import styled from 'styled-components';

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CardItems = styled.div`
  width: 200px;
  background-color: #d6d6d6;
  position: relative;
  margin: 20px;
  padding: 15px;
  border-radius: 10px;
`;

const ProductCardWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const TextControlWidth = styled.div`
  white-space: nowrap;
  margin: 5px 0 5px 0;
  width: auto;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TextPrice = styled.div`
  color: orange;
  margin: 5px 0 5px 0;
`;

const AddCartButton = styled.button`
  border-radius: 20px;
  border: 0;
  cursor: pointer;
  margin: 5px 0 5px 0;
  background-color: #bfbfbf;
  width: 100%;
  height: 30px;
  &:active {
    background-color: #d6d6d6;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ProductImage = styled.img`
  width: 100px;
  height: 150px;
  margin: 10px;
`;
export {
  CardWrapper,
  CardItems,
  ProductCardWrapper,
  TextControlWidth,
  TextPrice,
  AddCartButton,
  ProductImage,
  ImageWrapper,
};
