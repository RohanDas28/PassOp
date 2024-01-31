import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash, FaPlusCircle, FaTrash } from 'react-icons/fa';

const DisplayPasswords = () => {

    // State for toggling password visibility in the input fields
    const [showPassword, setShowPassword] = useState(false);

    // State for storing and displaying passwords
    const [passwords, setPasswords] = useState([]);

    // State for managing the input fields when adding a new password
    const [newPassword, setNewPassword] = useState({
        website: '',
        username: '',
        password: '',
    });

    // State for managing the visibility of passwords in the table
    const [revealedPasswords, setRevealedPasswords] = useState({});

    // Function to toggle the visibility of a password in the table
    const revealPassword = (id) => {
        setRevealedPasswords((prevRevealedPasswords) => ({
            ...prevRevealedPasswords,
            [id]: !prevRevealedPasswords[id], // Toggle the reveal state
        }));
    };

    // Function to add a new password
    const addPassword = async () => {
        // Validate that none of the fields are empty before making the API request
        if (newPassword.website && newPassword.username && newPassword.password) {
            try {
                // Make a POST request to add the new password
                const response = await axios.post(`${import.meta.env.VITE_API_URL}/passwords`, newPassword);
                // Update the local state with the newly added password
                setPasswords([...passwords, response.data]);
                // Reset the input fields for a new password
                setNewPassword({
                    website: '',
                    username: '',
                    password: '',
                });
            } catch (error) {
                console.error('Error adding password:', error);
            }
        } else {
            alert('Please fill in all fields before adding the password.');
        }
    };

    // Function to delete a password
    const deletePassword = async (id) => {
        try {
            // Make a DELETE request to remove the password
            await axios.delete(`${import.meta.env.VITE_API_URL}/passwords/${id}`);
            // Update the local state by filtering out the deleted password
            setPasswords(passwords.filter((password) => password._id !== id));
            // Remove the revealed status when deleting a password
            setRevealedPasswords((prevRevealedPasswords) => {
                const { [id]: deletedPassword, ...rest } = prevRevealedPasswords;
                return rest;
            });
        } catch (error) {
            console.error('Error deleting password:', error);
        }
    };

    // Function to toggle the visibility of passwords in the input fields
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // useEffect hook to fetch data from the backend on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make a GET request to retrieve passwords from the backend
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/passwords`);
                // Update the local state with the fetched passwords
                setPasswords(response.data);
            } catch (error) {
                console.error('Error Fetching Passwords! Here is More Info: ', error);
            }
        };
        // Invoke the fetchData function on component mount
        fetchData();
    }, []);

    return (
        <>
            <div className="text-white p-4 flex flex-col items-center justify-center gap-4">
                <div className='my-4 md:my-8 cursor-pointer hover:scale-105 transition ease-in-out'>
                    <p className='text-4xl text-white text-center font-bold'>&lt;Pass<span className='text-green-400'>OP</span>/&gt;</p>
                    <p className='text-2xl text-green-400 animate-pulse duration-1000 text-center'>Your Own Password Manager!</p>
                </div>
                <input type="text" placeholder="Website Name" className="border border-green-500 p-3 w-full md:w-3/5 bg-gray-800 text-white rounded-full mb-4" value={newPassword.website} onChange={(e) => setNewPassword({ ...newPassword, website: e.target.value })} />
                <div className="flex flex-col md:flex-row w-full md:w-3/5 gap-4">
                    <input type="text" placeholder="Username" className="border border-green-500 p-3 flex-1 bg-gray-800 text-white rounded-full mb-4 md:mb-0" value={newPassword.username} onChange={(e) => setNewPassword({ ...newPassword, username: e.target.value })} />
                    <div className="relative flex-1">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" className="border border-green-500 p-3 w-full bg-gray-800 text-white rounded-full" value={newPassword.password} onChange={(e) => setNewPassword({ ...newPassword, password: e.target.value })} />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-400 p-2 focus:outline-none bg-transparent backdrop-filter backdrop-blur-md" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
                <button onClick={addPassword} className="inline-flex items-center bg-green-400 border-0 py-2 px-4 focus:outline-none font-semibold text-xl hover:bg-green-500 rounded-full text-black mt-4 md:mt-0 hover:scale-105 transition ease-in-out gap-2">
                    <FaPlusCircle /> Add
                </button>
            </div>
            <div className="passwords mt-6 mb-20">
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
                                {passwords.slice().reverse().map((password) => (
                                    <tr key={password._id}>
                                        <td className="px-4 py-3 w-1/4">{password.website}</td>
                                        <td className="px-4 py-3 w-1/4">{password.username}</td>
                                        <td className="px-4 py-3 w-1/4">
                                            {revealedPasswords[password._id] ? (
                                                password.password
                                            ) : (
                                                '•'.repeat(password.password.length) // Display dots with the same length as the password
                                            )}
                                        </td>
                                        <td className="px-4 py-3 w-1/4">
                                            <button
                                                onClick={() => revealPassword(password._id)}
                                                className="flex hover:scale-105 text-black justify-center items-center gap-2 bg-green-500 px-3 py-1 rounded-full hover:bg-green-600 transition ease-in-out"
                                            >
                                                {revealedPasswords[password._id] ? <FaEyeSlash /> : <FaEye />} {revealedPasswords[password._id] ? 'Hide' : 'Reveal'}
                                            </button>
                                        </td>
                                        <td className="px-4 py-3 w-1/4">
                                            <button
                                                onClick={() => deletePassword(password._id)}
                                                className="flex hover:scale-105 justify-center items-center gap-2 bg-red-500 px-3 py-1 rounded-full hover:bg-red-700 transition ease-in-out"
                                            >
                                                <FaTrash /> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="lg:w-2/3 w-full mx-auto overflow-auto bg-gray-800 rounded-lg">
                        {passwords.length === 0 ? (
                            <>
                                <p className='my-2 text-xl text-center text-green-400'>Add a password to display them</p>
                            </>
                        ) : (
                            <>
                                <p className='my-2 text-xl animate-bounce text-center text-green-400'>Loading Passwords</p>
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
                                        <tr>
                                            <td className="px-4 py-3 w-1/4"><div className="animate-pulse bg-gray-600 h-4 w-full rounded-full"></div></td>
                                            <td className="px-4 py-3 w-1/4"><div className="animate-pulse bg-gray-600 h-4 w-full rounded-full"></div></td>
                                            <td className="px-4 py-3 w-1/4">
                                                <div className="animate-pulse bg-gray-600 h-4 w-full rounded-full"></div>
                                            </td>
                                            <td className="px-4 py-3 w-1/4">
                                                <div className="animate-pulse bg-gray-600 h-4 w-full rounded-full"></div>
                                            </td>
                                            <td className="px-4 py-3 w-1/4">
                                                <div className="animate-pulse bg-gray-600 h-4 w-full rounded-full"></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default DisplayPasswords;
