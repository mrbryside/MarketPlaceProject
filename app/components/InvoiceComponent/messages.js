/*
 * InvoiceComponent Messages
 *
 * This contains all the text for the InvoiceComponent component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.InvoiceComponent';

export default defineMessages({
  productListText: {
    id: `${scope}.productListText`,
    defaultMessage: 'รายการสินค้า',
  },
  productAmountText: {
    id: `${scope}.productAmountText`,
    defaultMessage: 'จำนวน',
  },
  productPriceText: {
    id: `${scope}.productPriceText`,
    defaultMessage: 'ราคา',
  },
  productSumText: {
    id: `${scope}.productSumText`,
    defaultMessage: 'รวม',
  },
});
