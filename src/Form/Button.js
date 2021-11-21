import React from 'react';

export default function Button({
    type = 'button',
    children,
    ...props
}) {

    return <button
        type={type}
        className="p-2 bg-blue-500 hover:bg-blue-700 rounded-md text-white shadow-md w-24"
        {...props}
        >
        {children}
    </button>;
}
