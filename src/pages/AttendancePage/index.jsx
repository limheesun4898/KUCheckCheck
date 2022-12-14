import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { useMediaQuery } from 'react-responsive';


import { BASE_COLOR, StyledBackground, StyledSidePadding } from '@utility';

import CourseAttendanceCard from './CourseAttendanceCard';
import { StyledRoundBox, StyledTextBase } from './CourseAttendanceCard/style';
import CourseAttendanceTop from './CourseAttendanceTop';

export const AttendacePage = ({ courseData }) => {
  const courseName = courseData.courseName;
  const userData = courseData.courseAttendance;
  const courseId = courseData.courseId;
  const courseCheckAdmin = courseData.courseCheckAdmin;
  const [isEditMode, setIsEditMode] = useState(false);
  const [courseAttendance, setcourseAttendance] = useState();
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  useEffect(() => {
    courseData.courseAttendance &&
      setcourseAttendance(courseData.courseAttendance);
  }, [courseData]);

  const onEditedAttendance = data => {
    let newcourseAttendance = courseAttendance;
    courseAttendance.map((course, key) => {
      if (course.id === data.id) {
        newcourseAttendance[key] = data;
      }
    });
    setcourseAttendance(newcourseAttendance);
  };

  const renderCourseAttendanceCard = () => {
    if (userData) {
      return userData.map((userData, key) => {
        return (
          <CourseAttendanceCard
            key={key}
            userData={userData}
            isEditMode={isEditMode}
            editedAttendance={data => onEditedAttendance(data)}
          />
        );
      });
    }
  };

  return (
    <StyledBackground>
      <StyledSidePadding>
        <CourseAttendanceTop
          courseName={courseName}
          courseId={courseId}
          isEditMode={isEditMode}
          toggleEditMode={() => setIsEditMode(prev => !prev)}
          courseAttendance={courseAttendance}
          courseCheckAdmin={courseCheckAdmin}
        />
        {isMobile ? (
          <ScrollMenu>
            <div style={{ display: 'flex', gap: '6px', paddingRight: '10px' }}>
              <StyledRoundBox
                style={{
                  backgroundColor: BASE_COLOR,
                  marginTop: '30px',
                  marginLeft: '-20px',
                }}>
                <StyledTextBase>1??????</StyledTextBase>
                <StyledTextBase>2??????</StyledTextBase>
                <StyledTextBase>3??????</StyledTextBase>
                <StyledTextBase>4??????</StyledTextBase>
                <StyledTextBase>5??????</StyledTextBase>
                <StyledTextBase>6??????</StyledTextBase>
                <StyledTextBase>7??????</StyledTextBase>
                <StyledTextBase>8??????</StyledTextBase>
              </StyledRoundBox>
              {renderCourseAttendanceCard()}
            </div>
          </ScrollMenu>
        ) : (
          renderCourseAttendanceCard()
        )}

        {/* ?????????????????? ????????? text ?????? */}
      </StyledSidePadding>
    </StyledBackground>
  );
};

AttendacePage.propTypes = {
  courseData: PropTypes.object,
};
