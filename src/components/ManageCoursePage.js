import React, { useState } from 'react';
import * as courseApi from "../api/courseApi";

import CourseForm from './CourseForm';

const ManageCoursePage = (props) => {
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: ''
    });

    const handleChange = ({target}) => {
        setCourse({...course, [target.name]: target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        courseApi.saveCourse(course);
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm course={course} onChange={handleChange} onSubmit={handleSubmit} />
            {props.match.params.slug}
        </>
    );
}

export default ManageCoursePage;