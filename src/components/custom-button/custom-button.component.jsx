import React from 'react';

import "./custom-button.styles.scss";

const CustomButton = ({backgroundColor,children,...otherProps})=>(
    <button className="custom-button"  style={{backgroundColor:`${backgroundColor}`}} {...otherProps} >{children}</button>
)

export default CustomButton;