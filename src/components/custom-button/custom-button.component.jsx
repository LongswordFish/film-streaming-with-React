import React from 'react';

import "./custom-button.styles.scss";

const CustomButton = ({backgroundColor,children})=>(
    <span className="custom-button" style={{backgroundColor:`${backgroundColor}`}}>{children}</span>
)

export default CustomButton;