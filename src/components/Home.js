import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700">
                    WeCode - hỗ trợ học lập trình
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            className="block text-base font-semibold text-gray-800"
                        >
                            Mã phòng
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setRoomId(e.target.value)}
                            value={roomId}
                            onKeyUp={handleInputEnter}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border-2 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            className="block text-base font-semibold text-gray-800"
                        >
                            Tên của bạn
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            onKeyUp={handleInputEnter}
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border-2 rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mt-6">
                        <button onClick={joinRoom} className="w-full text-base font-bold px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Tham Gia
                        </button>
                    </div>
                </form>

                <p className="mt-8 text-base font-light text-center text-gray-700">
                    Nếu bạn không có mã phòng, hãy &nbsp;
                    <a
                        onClick={createNewRoom}
                        href=""
                        className="font-medium text-purple-600 hover:underline"
                    >
                        tạo phòng mới
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Home;
