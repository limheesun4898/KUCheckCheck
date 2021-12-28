import React, { useEffect, useState } from "react";
import { firestoreService } from "../../../firebase";
import CourseAttendanceCard from "./CourseAttendanceCard";
import CourseAttendanceTop from "./CourseAttendanceTop";

function CourseAttendace() {
  const courseId = document.location.href.split("/")[5];
  const [userData, setuserData] = useState([]);
  const [courseName, setCourseName] = useState("");
  useEffect(() => {
    const courseId = document.location.href.split("/")[5];
    firestoreService
      .collection("courses")
      .doc(courseId)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot.data().courseName);
        setCourseName(querySnapshot.data().courseName);
        setuserData(querySnapshot.data().courseAttendance);
      });
  }, []);

  return (
    <div>
      {userData && (
        <CourseAttendanceTop
          courseName={courseName}
          userData={userData}
          courseId={courseId}
        />
      )}
      {userData &&
        userData.map((userData, key) => {
          return (
            <CourseAttendanceCard
              key={key}
              indexKey={key}
              userData={userData}
              courseId={courseId}
              isEditPage={"false"}
            />
          );
        })}
    </div>
  );
}

export default CourseAttendace;
