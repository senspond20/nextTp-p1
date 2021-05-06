import React from 'react';
import useStyles from "./InputWithLabelStyle";
import PropTypes from "prop-types";


// rest 쪽에는 onChange, type, name, value, placeholder 등의 input 에서 사용 하는 값들을 넣어줄수 있다.
const InputWithLabel = ({label, ...rest}) => {
    const classes = useStyles();
    return (
        <div className={classes.Wrapper}>
            <label className ={classes.Label}>{label}</label>
            <input className ={classes.Input} {...rest}/>
        </div>
    )

};
InputWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    // rest: PropTypes.oneOfType([
    //   PropTypes.arrayOf(PropTypes.node),
    //   PropTypes.node
    // ]).isRequired
  };
export default InputWithLabel;