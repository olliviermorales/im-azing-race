'use client';
import { useState, useEffect } from 'react';
import { hospitals } from '@/helpers/helper';
import DeleteModal from './DeleteModal';
import toast from 'react-hot-toast';

const Teams = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteError, setDeleteError] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = async (password) => {
    setLoading(true);
    try {
      if (password === 'Ko!91673') {
        // Password is correct, proceed with user deletion
        const response = await fetch(`/api/users/${selectedUser._id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
          // You can include additional headers or authentication tokens if required
        });

        if (response.ok) {
          // User deleted successfully, close the modal, update UI, etc.
          const updatedResponse = await fetch(`/api/users/getAll`);
          const updatedData = await updatedResponse.json();
          setUsers(updatedData);
          setShowDeleteModal(false);
          toast.success(`${selectedUser.nickName} successfully removed!`, {
            duration: 4000,
            style: {
              backgroundColor: '#00FF00',
              color: '#184499',
            },
            position: 'top-right',
            iconTheme: {
              primary: '#184499',
              secondary: '#FFCD00',
            },
          });
        } else {
          // Handle error cases (user not found, server error, etc.)
          console.error('Failed to delete user');
          toast.error('Failed to delete user');
        }
      } else {
        // Incorrect password, set delete error message
        setDeleteError('Invalid password');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('Error deleting user', error);
      toast.error('Error deleting user');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/users/getAll`);
      const data = await response.json();
      setUsers(data);
    };

    fetchPost();
  }, []);

  return (
    <section
      className='min-h-screen bg-cover bg-no-repeat bg-center p-4 sm:p-8 md:p-16 flex flex-col'
      style={{ backgroundImage: 'url("/assets/images/teams-green.png")' }}
    >
      <div className='justify-center w-full'>
        <p className='text-center uppercase text-4xl sm:text-5xl md:text-6xl text-white font-black mb-6'>
          meet the teams
        </p>
      </div>
      <div className='bg-gradient-to-b from-primary-green/[.5] to-yellow-500/[.5] opacity-0.1 flex flex-col'>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-8 md:gap-20 pt-8 px-4 sm:px-8 md:px-16'>
          {hospitals.slice(0, 6).map((hospital, index) => {
            const hospitalUsers = users.filter(
              (user) => user.hospital === hospital.name
            );
            return (
              <div
                key={index}
                className='bg-gradient-to-r from-primary-green/[.1] to-primary-green/[1] shadow'
              >
                <img
                  src={hospital.pictureSrc}
                  alt={hospital.name}
                  className='w-full h-32 object-contain mb-4 bg-white'
                />
                <h2 className='to-yellow-500 text-sm font-semibold p-2 text-white drop-shadow-xl'>
                  {hospital.name}
                </h2>
                {hospitalUsers.length > 0 ? (
                  <ol className='list-decimal pl-4'>
                    {hospitalUsers.map((user, idx) => (
                      <li key={idx} className='ml-2 text-white drop-shadow-2xl'>
                        <div className='flex items-center'>
                          <span>{user.nickName}</span>
                          <span
                            className='cursor-pointer ml-auto text-red-500 pr-2'
                            onClick={() => handleDeleteClick(user)}
                          >
                            x
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className='text-white p-2'>No members yet.</p>
                )}
              </div>
            );
          })}
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-20 p-4 sm:p-8 md:p-16 justify-center items-center'>
          {hospitals.slice(6).map((hospital, index) => {
            const hospitalUsers = users.filter(
              (user) => user.hospital === hospital.name
            );
            return (
              <div
                key={index}
                className='bg-gradient-to-r from-primary-green/[.1] to-primary-green/[1] shadow'
              >
                <img
                  src={hospital.pictureSrc}
                  alt={hospital.name}
                  className='w-full h-32 object-contain mb-4 bg-white'
                />
                <h2 className='to-yellow-500 text-sm font-semibold p-2 text-white drop-shadow-xl'>
                  {hospital.name}
                </h2>
                {hospitalUsers.length > 0 ? (
                  <ol className='list-decimal pl-4'>
                    {hospitalUsers.map((user, idx) => (
                      <li key={idx} className='ml-2 text-white drop-shadow-2xl'>
                        <div className='flex items-center'>
                          <span>{user.nickName}</span>
                          <span
                            className='cursor-pointer ml-auto text-red-500 pr-2'
                            onClick={() => handleDeleteClick(user)}
                          >
                            x
                          </span>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className='text-white p-2'>No members yet.</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <DeleteModal
        showModal={showDeleteModal}
        setShowModal={setShowDeleteModal}
        handleDeleteConfirm={handleDeleteConfirm}
        setDeleteError={setDeleteError}
        deleteError={deleteError}
        loading={loading}
      />
    </section>
  );
};

export default Teams;
