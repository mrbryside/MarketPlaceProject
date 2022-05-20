/**
 *
 * InvoiceComponent
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  InvoiceWrapper,
  TableWrapper,
  TableChildTitle,
  TableChildAmount,
  SpacerTop,
  CloseModalButton,
  InVoiceBackground,
} from './styles/styles';

import messages from './messages';

function InvoiceComponent(props) {
  const { data, onToggleCartModal } = props;
  const { totalAmount, totalBaht } = props.marketListContainer;
  return (
    <React.Fragment>
      <InVoiceBackground onClick={() => onToggleCartModal()} />
      <InvoiceWrapper>
        <CloseModalButton onClick={() => onToggleCartModal()}>
          X
        </CloseModalButton>
        <TableWrapper>
          <TableChildTitle>
            <FormattedMessage {...messages.productListText} />
          </TableChildTitle>
          <TableChildAmount>
            <FormattedMessage {...messages.productAmountText} />
          </TableChildAmount>
          <TableChildAmount>
            <FormattedMessage {...messages.productPriceText} />
          </TableChildAmount>
        </TableWrapper>
        {Object.values(data).map(item => (
          <TableWrapper>
            <TableChildTitle>{item.title}</TableChildTitle>
            <TableChildAmount>{item.amount}</TableChildAmount>
            <TableChildAmount>
              {Math.floor(item.amount * item.price)}
            </TableChildAmount>
          </TableWrapper>
        ))}
        <SpacerTop />
        <TableWrapper>
          <TableChildTitle>
            <FormattedMessage {...messages.productSumText} />
          </TableChildTitle>
          <TableChildAmount>{totalAmount}</TableChildAmount>
          <TableChildAmount>{Math.floor(totalBaht)}</TableChildAmount>
        </TableWrapper>
      </InvoiceWrapper>
    </React.Fragment>
  );
}

InvoiceComponent.propTypes = {
  data: PropTypes.object,
  onToggleCartModal: PropTypes.func,
  marketListContainer: PropTypes.object,
};

export default memo(InvoiceComponent);
