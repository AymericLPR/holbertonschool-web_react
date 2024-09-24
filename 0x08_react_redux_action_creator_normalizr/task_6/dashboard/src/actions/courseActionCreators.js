import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';
import { bindActionCreators, useDispatch } from 'redux';

export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

const dispatch = useDispatch();

export const boundSelectCourse = bindActionCreators(selectCourse, dispatch);
export const boundUnSelectCourse = bindActionCreators(unSelectCourse, dispatch);
