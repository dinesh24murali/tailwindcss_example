import React from 'react';

export default function Input({
    className = '',
    type = 'text',
    ...props
}) {

    return <input
        type={type}
        className={`${className} rounded-md border-2 p-2 border-gray-300 focus-visible:border-blue-300 focus:border-blue-300 border-solid text-base transition-fast`}
        {...props}
    />;
}
