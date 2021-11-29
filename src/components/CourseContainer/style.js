import { Button } from "antd";
import styled from "styled-components";

export const StyledCourseContainer = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 20px;
  box-shadow: rgb(50 50 93 / 15%) 0px 13px 27px -5px,
    rgb(0 0 0 / 10%) 0px 8px 16px -8px;
  display: grid;
  grid-template-columns: 150px auto;
  margin-top: 20px;
  margin-bottom: 30px;
  background-color: white;
`;

export const StyledCourseImg = styled.div`
  display: grid;
  place-items: center;
  margin-left: 15%;
`;

export const StyledCourseExplainWrapper = styled.div``;

export const StyledCourseText = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  cursor: pointer;
`;

export const StyledCourseTitle = styled.div`
  & > div {
    font-family: "NexonBo";
    font-size: 26px;
    margin-bottom: 5px;
  }
`;

export const StyledCourseExplain = styled.div`
  & > p {
    font-family: "NexonRe";
  }
  font-size: 13.3px;
  margin-top: -10px;
`;

export const StyledCourseFavorite = styled.div``;

export const StyledCourseLevel = styled.div`
  margin-top: 25px;
  margin-right: 25px;
  padding-top: 25px;
  height: 64px;
  background-color: rgb(245, 245, 245);
  text-align: center;
  border-radius: 30px;
  cursor: pointer;
`;

export const StyledCourseApplyOn = styled(Button)`
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  border-radius: 30px;
  height: 64px;
  display: grid;
  place-items: center;
  background-color: #c32020;
  font-size: 16px;
  /* -webkit-transition: background-color 1.5s;
  transition: background-color 1.5s; */
`;

export const StyledCourseApplyOff = styled.button`
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  border-radius: 30px;
  height: 64px;
  display: grid;
  place-items: center;
  background-color: #656565;
  color: white;
  font-size: 16px;
  cursor: not-allowed;
  /* -webkit-transition: background-color 1.5s;
  transition: background-color 1.5s; */
`;

export const StyledCourseApplyMy = styled.button`
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  border-radius: 30px;
  height: 64px;
  display: grid;
  place-items: center;
  background-color: #212121;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #393838;
  }
  -webkit-transition: background-color 0.5s;
  transition: background-color 0.5s;
`;

export const StyledCourseApplyLock = styled.button`
  margin-top: 25px;
  margin-right: 25px;
  margin-bottom: 20px;
  border-radius: 30px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3f3f3f;
  color: white;
  font-size: 14px;
  gap: 7px;
  cursor: not-allowed;
`;