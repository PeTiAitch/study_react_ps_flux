import React from "react";
import PropTypes from "prop-types";

const SelectInput = (props) => {
  let wrapperClass = "form-group";
  if (props.error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          name={props.name}
          className="form-control"
          value={props.value}
          onChange={props.onChange}
        >
          <option value="" />
          {props.options.map(({ value, optionName }) => (
            <option key={value} value={value}>
              {optionName}
            </option>
          ))}
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      optionName: PropTypes.string.isRequired,
    })
  ).isRequired,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};

export default SelectInput;
