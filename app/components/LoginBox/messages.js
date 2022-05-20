/*
 * LoginBox Messages
 *
 * This contains all the text for the LoginBox component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.LoginBox';

export default defineMessages({
  usernameLabelText: {
    id: `${scope}.usernameLabelText`,
    defaultMessage: 'username',
  },
  loginButtonText: {
    id: `${scope}.loginButtonText`,
    defaultMessage: 'login',
  },
});
