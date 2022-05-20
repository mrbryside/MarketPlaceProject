/**
 *
 * ProductCardComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { FormattedMessage } from 'react-intl';
import {
  CardWrapper,
  CardItems,
  ProductCardWrapper,
  TextControlWidth,
  TextPrice,
  AddCartButton,
  ProductImage,
  ImageWrapper,
} from './styles/styles';
import messages from './messages';

function ProductCardComponent(props) {
  const { data, onAddItemtoCart } = props;
  return (
    <ProductCardWrapper>
      <CardWrapper>
        {Object.values(data).map(item => (
          <CardItems>
            <ImageWrapper>
              <ProductImage src={item.image} alt="product img" />
            </ImageWrapper>
            <TextControlWidth>{`Title: ${item.title}`}</TextControlWidth>
            <TextControlWidth>{`Desciption: ${
              item.description
            }`}</TextControlWidth>
            <TextPrice>{`฿${item.price}`}</TextPrice>
            <AddCartButton onClick={() => onAddItemtoCart(item)}>
              <FormattedMessage {...messages.addtoCartButtonText} />
            </AddCartButton>
          </CardItems>
        ))}
      </CardWrapper>
    </ProductCardWrapper>
  );
}

ProductCardComponent.propTypes = {
  data: PropTypes.object,
  onAddItemtoCart: PropTypes.func,
};

export default memo(ProductCardComponent);
