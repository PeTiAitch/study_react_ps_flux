import dispatcher from '../appDispatcher';
import * as courseApi from "../api/courseApi";
import actionTypes from './actionTypes';

export const saveCourse = (course) => {
    return courseApi.saveCourse(course).then(savedCourse => {
        dispatcher.dispatch({
          actionType: actionTypes.CREATE_COURSE,
          course: savedCourse,
        });
    });
}