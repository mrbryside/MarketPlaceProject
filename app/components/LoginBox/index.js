/**
 *
 * LoginBox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  LoginBoxWrapper,
  LoginButton,
  LoginButtonWrapper,
  Input,
} from './styles/styles';
import messages from './messages';

function LoginBox(props) {
  const { username, setUsername } = props;
  return (
    <LoginBoxWrapper>
      <span>
        <FormattedMessage {...messages.usernameLabelText} />
      </span>
      <Input
        placeholder="username"
        onChange={e => setUsername(e.target.value)}
      />
      <LoginButtonWrapper>
        <LoginButton to={username && `/market/${username}`}>
          <FormattedMessage {...messages.loginButtonText} />
        </LoginButton>
      </LoginButtonWrapper>
    </LoginBoxWrapper>
  );
}

LoginBox.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func,
};

export default memo(LoginBox);
