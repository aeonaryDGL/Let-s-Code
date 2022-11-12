import React from 'react';

const Client = ({ username }) => {
    return (
        <div className="flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.59 22C20.59 18.13 16.74 15 12 15C7.26 15 3.41 18.13 3.41 22M12 12C13.3261 12 14.5979 11.4732 15.5355 10.5355C16.4732 9.59785 17 8.32608 17 7C17 5.67392 16.4732 4.40215 15.5355 3.46447C14.5979 2.52678 13.3261 2 12 2C10.6739 2 9.40215 2.52678 8.46447 3.46447C7.52679 4.40215 7 5.67392 7 7C7 8.32608 7.52679 9.59785 8.46447 10.5355C9.40215 11.4732 10.6739 12 12 12V12Z" stroke="#34454C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <span className="px-2 text-base text-[#34454C]">{username}</span>
        </div>
    );
};

export default Client;
