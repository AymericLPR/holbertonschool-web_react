import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import { fromJS, Map } from 'immutable';
import { coursesNormalizer } from '../schema/courses';

const initialState = Map();

function courseReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_COURSE_SUCCESS:
            const normalizedData = coursesNormalizer(action.data);
            const courses = fromJS(normalizedData.entities.courses);
            return state.merge(courses);

        case SELECT_COURSE:
            return state.setIn([action.index.toString(), 'isSelected'], true);

        case UNSELECT_COURSE:
            return state.setIn([action.index.toString(), 'isSelected'], false);

        default:
            return state;
    }
}

export default courseReducer;
