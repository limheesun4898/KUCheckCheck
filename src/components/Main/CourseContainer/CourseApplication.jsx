import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { firestoreService } from "../../../firebase";
import * as S from "../style";

function CourseApplication({ maxMemberNum, courseMember, courseId }) {
  const user = useSelector((state) => state.user);
  const [Loading, setLoading] = useState(false);
  const [courseMemberArr, setcourseMemberArr] = useState([]);

  useEffect(() => {
    setcourseMemberArr(courseMember);
    // 이벤트 리스너
    firestoreService
      .collection("courses")
      .doc(courseId)
      .onSnapshot((doc) => {
        if (courseMember) {
          // 버튼 누르면 수강중 버튼으로 바뀌어야 할지? 아니면 숫자가 하나 올라야할지?
          setcourseMemberArr(doc.data().courseMember);
        }
      });
  }, []);

  const applicationHandler = () => {
    // loading이 false라면
    if (!Loading) {
      setLoading(true);
      // CourseMemver의 수가 Max보다 작을 때
      if (!courseMemberArr || courseMember.length < maxMemberNum) {
        // 현재 유저가 CourseMember에 없을 때
        if (
          !courseMemberArr ||
          courseMember.indexOf(user.currentUser.uid) < 0
        ) {
          // 새로운 배열을 생성
          let newCourseMember = [];
          if (courseMemberArr) {
            newCourseMember = [user.currentUser.uid, ...courseMember];
          } else {
            newCourseMember = [user.currentUser.uid];
          }
          firestoreService
            .collection("courses")
            .doc(courseId)
            .update({
              courseMember: newCourseMember,
            })
            .then(() => {
              // UI 변경
              alert("신청이 완료되었습니다.");
            })
            .catch((error) => {
              alert("error", error);
            });
        } else {
          alert("이미 신청한 과목입니다.");
        }
      }
      setLoading(false);
    }
  };

  const renderApplcationButton = () => {
    if (courseMemberArr && courseMemberArr.indexOf(user.currentUser.uid) >= 0) {
      return (
        <S.SessionApplicationMy>
          수강 중{" "}
          <div style={{ fontSize: "14px" }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </S.SessionApplicationMy>
      );
    } else if (!courseMemberArr || courseMemberArr.length < maxMemberNum) {
      return (
        <S.SessionApplicationOn type="danger" onClick={applicationHandler}>
          신청하기
          <div style={{ fontSize: "14px" }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </S.SessionApplicationOn>
      );
    } else if (courseMemberArr.length >= maxMemberNum) {
      return (
        <S.SessionApplicationOff>
          가득 참{" "}
          <div style={{ fontSize: "14px" }}>
            {courseMemberArr.length} / {maxMemberNum ? maxMemberNum : 0}
          </div>
        </S.SessionApplicationOff>
      );
    }
  };
  return <>{renderApplcationButton()}</>;
}

export default CourseApplication;
