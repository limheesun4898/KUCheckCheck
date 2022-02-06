import CheckableTag from 'antd/lib/tag/CheckableTag';
import styled from 'styled-components';

import { BASE_COLOR, MAIN_COLOR } from '@utility/COLORS';

export const StyledTag = styled(CheckableTag)`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height: 30px;
  margin-left: 10px;
  margin-top: 10px;
  background-color: #f5f5f5;
  border: none;
  padding: 3px 14px;
  font-size: 14px;
  &.ant-tag-checkable-checked {
    background-color: #212121 !important;
    color: white;
  }
  @media (max-width: 1224px) {
    white-space: nowrap;
    overflow: hidden;
    padding: 3px 7px;
    font-size: 12px;
    margin-left: 5px;
  }
`;

export const StyledSearchContainer = styled.div`
  margin-top: 2em;
  display: flex;
  align-items: center;
  @media (max-width: 1224px) {
    justify-content: center;
  }
`;

export const StyledSearchBar = styled.input`
  min-width: 28em;
  height: 3.5em;
  background-color: ${BASE_COLOR};
  border: none;
  z-index: 0;
  padding-left: 50px;
  &::placeholder {
    color: rgb(204, 204, 204);
  }
  &:focus {
    outline: none;
  }
  ${({ screenWidth }) => {
    if (screenWidth < 450) {
      return `
        min-width: ${screenWidth - 120}px;
      `;
    } else {
      return `
      @media (max-width: 1224px) {
        min-width: 22em;
      }
      `;
    }
  }}
`;

export const StyledSearchBtn = styled.div`
  margin-right: -30px;
  z-index: 1;
  justify-content: center;
  height: 3.5em;
  display: flex;
  align-items: center;
  background: ${MAIN_COLOR};
  width: 7em;
  cursor: pointer;
  & > svg {
    font-size: 2em;
    color: white;
    font-weight: 900;
  }
  @media (max-width: 1224px) {
    width: 5em;
  }
`;

export const StyledQuickSearchContainer = styled.div`
  display: grid;
  grid-template-columns: 120px auto;
  margin-top: 20px;
  align-items: start;
  @media (max-width: 1224px) {
    display: flex;
    gap: 10px;
    padding: 0px 30px;
  }
`;

export const StyledQuickSearchText = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: 'NexonBo';
  margin-top: 10px;
  @media (max-width: 1224px) {
    justify-content: center;
    padding-bottom: 80px;
    font-size: 12px;
  }
`;
