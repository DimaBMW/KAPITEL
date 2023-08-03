import style from "../../assets/styles/Icon.scss";
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Icon = ({ name, className, onClick, size, disabled }) => {
  const elemSize = size ? { fontSize: `${size}rem` } : null;
  const classes = classNames(
    "fa",
    `fa-${name}`,
    className,
    { func: onClick },
    { disabled }
  );

  return (
    <i
      className={classes}
      onClick={disabled ? null : onClick}
      style={elemSize}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
  size: PropTypes.number,
  disabled: PropTypes.bool,
};

Icon.defaultProps = {
  name: "",
  className: "",
  onClick: () => {},
  size: null,
  disabled: false,
};

export default Icon;
