import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';

function CoursesPage() {
  const [courses, setCourses] = useState([]);

  // In the dependancy array, when it's empty it meant the effect is run only once, 
  // if there are vlues, it's run every time those values change
  useEffect(() => {
    getCourses().then((_courses) => setCourses(_courses));
  }, []);

  return (
    <>
      <h2>Courses</h2>
      <CourseList courses={courses} />
    </>
  );
}

export default CoursesPage;
