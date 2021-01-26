import React from 'react';

import CourseForm from './CourseForm';

const ManageCoursePage = (props) => {
    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm />
            {props.match.params.slug}
        </>
    );
}

export default ManageCoursePage;