import { fromJS } from 'immutable';
import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('should handle FETCH_COURSE_SUCCESS', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }]
    };
    const expectedState = fromJS({
      1: { id: 1, name: 'Course 1' },
      2: { id: 2, name: 'Course 2' }
    });
    expect(courseReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SELECT_COURSE', () => {
    const action = { type: SELECT_COURSE, index: 1 };
    const initialState = fromJS({
      1: { id: 1, name: 'Course 1' }
    });
    const expectedState = fromJS({
      1: { id: 1, name: 'Course 1', isSelected: true }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle UNSELECT_COURSE', () => {
    const action = { type: UNSELECT_COURSE, index: 1 };
    const initialState = fromJS({
      1: { id: 1, name: 'Course 1', isSelected: true }
    });
    const expectedState = fromJS({
      1: { id: 1, name: 'Course 1', isSelected: false }
    });
    expect(courseReducer(initialState, action)).toEqual(expectedState);
  });
});
