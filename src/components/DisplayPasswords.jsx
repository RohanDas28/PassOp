import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaPlusCircle, FaTrash } from 'react-icons/fa';

const DisplayPasswords = () => {


    const [showPassword, setShowPassword] = useState(false); // For Password Visibility
    const [passwords, setPasswords] = useState([]);  // Displaying The Password
    


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // fetching Data from backend
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/passwords`);
                setPasswords(response.data);
                console.log('connected to api!');
                console.log(response.data)
            } catch (error) {
                console.error('Error Fetching Passwords! Check Your API! Here is More Info: ', error);
            }
        };
        fetchData();

    }, []);

    return (
        <>
            <div className="text-white p-4 flex flex-col items-center justify-center gap-4">
                <p className='text-2xl text-green-400 animate-pulse duration-1000 text-center mb-4 md:mb-8'>Enter your credentials and Enjoy</p>
                <input type="text" placeholder="Website Name" className="border border-green-500 p-3 w-full md:w-3/5 bg-gray-800 text-white rounded-full mb-4" />
                <div className="flex flex-col md:flex-row w-full md:w-3/5 gap-4">
                    <input type="text" placeholder="Username" className="border border-green-500 p-3 flex-1 bg-gray-800 text-white rounded-full mb-4 md:mb-0" />
                    <div className="relative flex-1">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="border border-green-500 p-3 w-full bg-gray-800 text-white rounded-full" />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400 p-2 focus:outline-none bg-transparent backdrop-filter backdrop-blur-md" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <button className="inline-flex items-center bg-green-400 border-0 py-2 px-4 focus:outline-none font-semibold text-xl hover:bg-green-500 rounded-full text-black mt-4 md:mt-0 hover:scale-105 transition ease-in-out">
                    <FaPlusCircle /> Add
                </button>
            </div>
            <div className="passwords my-6">
                {Array.isArray(passwords) && passwords.length > 0 ? (
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto bg-gray-800 rounded-lg">
                        <table className="table-auto w-full text-left whitespace-no-wrap">
                            <thead className='bg-gray-700'>
                                <tr>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-green-400 text-sm rounded-tl rounded-bl">Website</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-green-400 text-sm">Username</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-green-400 text-sm">Password</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-green-400 text-sm">Reveal Password</th>
                                    <th className="px-4 py-3 title-font tracking-wider font-medium text-green-400 text-sm">Actions</th>
                                </tr>
                            </thead>
                            <tbody className='text-white'>
                                {passwords.map((password) => (
                                    <tr key={password._id}>
                                        <td className="px-4 py-3 w-1/4">{password.website}</td>
                                        <td className="px-4 py-3 w-1/4">{password.username}</td>
                                        <td className="px-4 py-3 w-1/4">{password.password}</td>
                                        <td className="px-4 py-3 w-1/4">
                                            <button className='flex text-black justify-center items-center gap-2 bg-green-500 px-3 py-1 rounded-full hover:bg-green-600 transition ease-in-out'>
                                                <FaEye /> Reveal
                                            </button>
                                        </td>
                                        <td className="px-4 py-3 w-1/4">
                                            <button className='flex justify-center items-center gap-2 bg-red-500 px-3 py-1 rounded-full hover:bg-red-600 transition ease-in-out'>
                                                <FaTrash /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>) : (
                    <p className="text-white text-center">Loading...</p>
                )
                }
            </div>
        </>
    );
};

export default DisplayPasswords;
