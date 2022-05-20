/*
 * LoginContainer
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import TopBarComponent from 'components/TopBarComponent';
import LoginBoxComponent from 'components/LoginBoxComponent';
import { FormattedMessage } from 'react-intl';
import { Helmet } from 'react-helmet';
import { WrapperBox } from './styles/styles';
import messages from './messages';

export default function LoginContainer() {
  const [username, setUsername] = useState('');
  return (
    <React.Fragment>
      <FormattedMessage {...messages.title}>
        {title => (
          <Helmet>
            <title>{title}</title>
          </Helmet>
        )}
      </FormattedMessage>
      <TopBarComponent />
      <WrapperBox>
        <LoginBoxComponent setUsername={setUsername} username={username} />
      </WrapperBox>
    </React.Fragment>
  );
}
