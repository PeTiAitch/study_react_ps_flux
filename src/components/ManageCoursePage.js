import React, { useState } from 'react';
import * as courseApi from "../api/courseApi";
import { toast } from 'react-toastify';

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
        courseApi.saveCourse(course).then(() => {
            props.history.push("/courses");
            toast.success('Course saved.');
        });
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