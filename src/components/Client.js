import React from 'react';
import Avatar from 'react-avatar';

const Client = ({ username }) => {
    return (
        <div className="client">
            <Avatar name={username} size={30} round="14px" />
            <span className="px-2 font-bold text-base">{username}</span>
        </div>
    );
};

export default Client;
