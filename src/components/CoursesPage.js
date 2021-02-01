import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { getCourses } from "../api/courseApi";
import courseStore from '../stores/courseStore';
import CourseList from './CourseList';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  // In the dependancy array, when it's empty it meant the effect is run only once, 
  // if there are vlues, it's run every time those values change
  useEffect(() => {
    setCourses(courseStore.getCourses());
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <Link to="/course" className="btn btn-primary">Add Course</Link>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
