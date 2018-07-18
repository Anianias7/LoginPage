import React from 'react';
import ErrorWrapper from './ErrorWrapper'

const error = ({messages}) => {
    return messages.length === 0 ? null  :
        <ErrorWrapper>{messages.map(msg => <p key={msg}>{msg}</p>)}</ErrorWrapper>

};

export default error;