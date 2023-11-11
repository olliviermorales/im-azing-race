'use client';
import React, { useState, useEffect } from 'react';

const Participants = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);
  const [passwordError, setPasswordError] = useState(null);
  const [loading, setLoading] = useState(false);

  const CORRECT_PASSWORD = 'Ko!91673'; // This should be verified on server-side ideally

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/getAll`);
      const data = await response.json();
      setUsers(data);
    };

    fetchPost();
  }, []);

  const handlePasswordSubmit = () => {
    setLoading(true);
    if (password === CORRECT_PASSWORD) {
      setIsPasswordCorrect(true);
      setShowModal(false);
      setPasswordError(null);
    } else {
      setPasswordError('Incorrect password');
      setPassword(''); // clear password field
    }
    setLoading(false);
  };
  if (showModal) {
    return (
      <div className='font-inter bg-gradient-to-b from-primary-yellow to-white w-full max-w-full flex min-h-screen flex-col mt-16 '>
        <div className='fixed inset-0 flex items-center justify-center z-50'>
          <div className='bg-white p-8 rounded shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>
              Enter Password to Access
            </h2>
            <input
              type='password'
              placeholder='Enter your password'
              className='mb-4 p-2 border border-gray-300 rounded w-full'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && (
              <p className='text-red-500 mb-4'>{passwordError}</p>
            )}
            <div className='flex justify-end'>
              <button
                className='mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
                onClick={handlePasswordSubmit}
              >
                {loading ? 'Confirming...' : 'Confirm'}
              </button>
              <button
                className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
                onClick={() => {}}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className='font-inter bg-gradient-to-b from-primary-yellow to-white w-full max-w-full flex min-h-screen flex-col mt-16 pt-16'>
      <h1>Participants</h1>
      <table className='min-w-full border-collapse shadow-md mt-4 bg-white'>
        <thead>
          <tr>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Contact Number
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Full Name
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Nickname
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Hospital
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Year Level
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Email
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Role
            </th>
            <th className='px-4 py-2 border-b-2 border-gray-300 bg-gray-200 text-left text-sm leading-4 text-gray-500 tracking-wider'>
              Is Contactable
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr
              key={user.contactNumber}
              className={index % 2 === 0 ? 'bg-gray-100' : ''}
            >
              <td className='px-4 py-2 border'>{user.contactNumber}</td>
              <td className='px-4 py-2 border'>{user.fullName}</td>
              <td className='px-4 py-2 border'>{user.nickName}</td>
              <td className='px-4 py-2 border'>{user.hospital}</td>
              <td className='px-4 py-2 border'>{user.yearLevel}</td>
              <td className='px-4 py-2 border'>{user.email}</td>
              <td className='px-4 py-2 border'>{user.role}</td>
              <td className='px-4 py-2 border'>
                {user.isContactable ? 'Yes' : 'No'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Participants;
