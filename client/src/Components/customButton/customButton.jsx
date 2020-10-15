import React from 'react';
import {Button} from './customButton.style'

const CustomButton = ({children,...props}) => (
    <Button {...props}>{children}</Button>
)

export default CustomButton;