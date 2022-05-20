/**
 *
 * MarketListContainer
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import TopBarComponent from 'components/TopBarComponent';
import ProductCardComponent from 'components/ProductCardComponent';
import InvoiceComponent from 'components/InvoiceComponent';
import CartIcon from 'images/shopping-cart.png';
import makeSelectMarketListContainer from './selectors';
import { fetchData, addCardItem, toggleCartModal, clearData } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import {
  WrapperBox,
  CartButton,
  CartAddNumber,
  CartIconImage,
  CartIconWrapper,
  LoadingWrapper,
} from './styles/styles';

export function MarketListContainer(props) {
  useInjectReducer({ key: 'marketListContainer', reducer });
  useInjectSaga({ key: 'marketListContainer', saga });

  const { fetchProductData, onToggleCartModal, onClearData } = props;
  const {
    productData,
    carts,
    totalAmount,
    toggleModal,
    fetching,
  } = props.marketListContainer;
  const { username } = props.match.params;
  useEffect(() => {
    fetchProductData();
    return () => {
      onClearData();
    };
  }, []);
  return (
    <div>
      <FormattedMessage {...messages.title}>
        {title => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <CartButton onClick={() => totalAmount > 0 && onToggleCartModal()}>
        {totalAmount > 0 && <CartAddNumber>{totalAmount}</CartAddNumber>}
        <CartIconWrapper>
          <CartIconImage src={CartIcon} alt="cart img" />
        </CartIconWrapper>
      </CartButton>
      <TopBarComponent username={username} />
      <WrapperBox>
        {fetching && (
          <LoadingWrapper>
            <FormattedMessage {...messages.loadingTitle} />
          </LoadingWrapper>
        )}
        {productData && (
          <React.Fragment>
            <ProductCardComponent {...props} data={productData} />
            {toggleModal && totalAmount > 0 && (
              <InvoiceComponent {...props} data={carts} />
            )}
          </React.Fragment>
        )}
      </WrapperBox>
    </div>
  );
}

MarketListContainer.propTypes = {
  fetchProductData: PropTypes.func,
  onToggleCartModal: PropTypes.func,
  onClearData: PropTypes.func,
  marketListContainer: PropTypes.object,
  match: PropTypes.object,
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  marketListContainer: makeSelectMarketListContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchProductData: () => {
      dispatch(fetchData());
    },
    onAddItemtoCart: payload => {
      dispatch(addCardItem(payload));
    },
    onToggleCartModal: payload => {
      dispatch(toggleCartModal(payload));
    },
    onClearData: () => {
      dispatch(clearData());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(MarketListContainer);
