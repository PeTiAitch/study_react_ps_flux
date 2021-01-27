import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onChange}
      />

      <SelectInput
        id="author"
        name="authorId"
        label="Author"
        value={props.course.authorId || ""}
        onChange={props.onChange}
        options={[
          { value: "1", optionName: "Cory House" },
          { value: "2", optionName: "Scott Allen" },
        ]}
      />

      <TextInput
        id="category"
        name="category"
        label="Category"
        value={props.course.category}
        onChange={props.onChange}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
