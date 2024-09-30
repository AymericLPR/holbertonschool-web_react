import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';


describe('courseReducer', () => {
  it('return the initial state when no action is passed', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('return the data passed when FETCH_COURSE_SUCCESS is dispatched', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    const state = courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data });
    expect(state).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
  });

  it('update the correct course when SELECT_COURSE is dispatched', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const state = courseReducer(initialState, { type: SELECT_COURSE, index: 2 });
    expect(state).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
  });

  it('update the correct course when UNSELECT_COURSE is dispatched', () => {
    const initialState = [
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: true },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ];
    const state = courseReducer(initialState, { type: UNSELECT_COURSE, index: 2 });
    expect(state).toEqual([
      { id: 1, name: 'ES6', credit: 60, isSelected: false },
      { id: 2, name: 'Webpack', credit: 20, isSelected: false },
      { id: 3, name: 'React', credit: 40, isSelected: false }
    ]);
  });
});
