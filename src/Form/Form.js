import React, { useState } from 'react';

import Input from './Input';
import Button from './Button';

export default function Form() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return <div className="container m-auto mt-28">
        <div className="p-10 rounded-xl shadow-md m-auto flex w-6/12 flex-col items-center">
            <div className="mb-5 text-primary">Registration form</div>
            <Input
                type="text"
                className="mb-2"
                onChange={({ target }) => setUserName(target.value)}
                value={userName}
                placeholder="user name"
            />
            <Input
                type="password"
                className="mb-2"
                onChange={({ target }) => setPassword(target.value)}
                value={password}
                placeholder="password"
            />
            <Button>
                Save
            </Button>
        </div>
    </div>;
}
