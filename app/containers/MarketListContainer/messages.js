/*
 * MarketListContainer Messages
 *
 * This contains all the text for the MarketListContainer container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MarketListContainer';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Market Page',
  },
  loadingTitle: {
    id: `${scope}.loadingTitle`,
    defaultMessage: 'Loading...',
  },
});
