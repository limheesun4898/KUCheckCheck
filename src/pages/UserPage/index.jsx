import React from 'react';

import PropTypes from 'prop-types';

import { StyledSideMargin } from '@utility';

import UserCourse from './UserCourse';
import UserInfo from './UserInfo';
import { StyledBackground } from './style';

export const UserPage = ({ userData }) => {
  return (
    <StyledBackground>
      <StyledSideMargin>
        <UserInfo userData={userData} />
        <UserCourse userData={userData} />
      </StyledSideMargin>
    </StyledBackground>
  );
};

UserPage.propTypes = {
  userData: PropTypes.object,
};
