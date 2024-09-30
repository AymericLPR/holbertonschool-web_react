import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index
  };
};

export const boundSelectCourse = (dispatch) => {
  return bindActionCreators({ selectCourse }, dispatch);
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index
  };
};

export const boundUnSelectCourse = (dispatch) => {
  return bindActionCreators({ unSelectCourse }, dispatch);
};
