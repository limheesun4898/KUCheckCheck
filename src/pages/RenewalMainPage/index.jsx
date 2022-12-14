import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { getCommonInfoRequest } from '@redux/actions/renewal_common_action';
import { getMainCourseRequest } from '@redux/actions/renewal_course_action';

import { SUCCESS } from '@utility/ALERT_MESSAGE';

import { MainCourseTab } from './MainCourseTab';
import { MainSearch } from './MainSearch';
import { MainTopContainer } from './MainTopContainer';
import {
  StyledUserContainer,
  MainBottomContainer,
  StyledMainCourse
} from './style';

export const RenewalMainPage = () => {
  const dispatch = useDispatch();

  const { status: commonInfoStatus, data: commonInfoData } = useSelector(
    state => ({
      status: state.common.commonInfo.status,
      data: state.common.commonInfo.data,
    }),
  );
  // current Semester : 현재 무슨 학기인지 => string
  const [currentSemester, setCurrentSemester] = useState('');

  // 학기 정보 불러오기
  useEffect(() => {
    dispatch(getCommonInfoRequest());
  }, []);

  // // 학기에 맞춰 코스 불러오기
  useEffect(() => {
    if (commonInfoStatus === SUCCESS) {
      handleCurrentSemester(commonInfoData.currentSemester);
    }
  }, [commonInfoData, commonInfoStatus]);

  const handleCurrentSemester = semester => {
    setCurrentSemester(semester);

    dispatch(getMainCourseRequest(semester));
  };

  return (
    <>
      <MainTopContainer />
      <MainBottomContainer>
        <StyledMainCourse>
          <MainSearch
            currentSemester={currentSemester}
            handleCurrentSemester={handleCurrentSemester}
          />
          <MainCourseTab />
        </StyledMainCourse>
        <StyledUserContainer>
          <div>유저</div>
          <div>시간표</div>
        </StyledUserContainer>
      </MainBottomContainer>
    </>
  );
};

RenewalMainPage.propTypes = {
  commonInfoStatus: PropTypes.string,
  commonInfoData: PropTypes.object,
};
