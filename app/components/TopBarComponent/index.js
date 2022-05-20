/**
 *
 * TopBarComponent
 *
 */

import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { TopBarWrapper, LabelWrapper, UsernameText } from './styles/styles';

import messages from './messages';

function TopBarComponent(props) {
  const { username } = props;
  return (
    <TopBarWrapper>
      <LabelWrapper>
        <FormattedMessage {...messages.header} />
        <UsernameText>{username}</UsernameText>
      </LabelWrapper>
    </TopBarWrapper>
  );
}

TopBarComponent.propTypes = {
  username: PropTypes.string,
};

export default memo(TopBarComponent);
