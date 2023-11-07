'use client';
import { useState, useEffect } from 'react';
import { hospitals } from '@/helpers/helper';
import DeleteModal from './DeleteModal';
import toast from 'react-hot-toast';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

//helper
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
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
          toast.success(
            `${capitalizeFirstLetter(
              selectedUser.nickName
            )} successfully removed!`,
            {
              duration: 4000,
              style: {
                backgroundColor: '#CEDF29',
                color: '#007273',
              },
              position: 'top-right',
              iconTheme: {
                primary: '#CEDF29',
                secondary: '#007273',
              },
            }
          );
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
      id='teams'
      className='bg-cover bg-no-repeat bg-center p-4 sm:p-8 md:p-16 flex flex-col h-full'
      style={{ backgroundImage: 'url("/assets/images/teams-green.png")' }}
    >
      <div className='justify-center w-full'>
        <p className='text-center uppercase text-4xl sm:text-5xl md:text-6xl text-white font-black mb-6'>
          meet the teams
        </p>
      </div>
      <div className='flex bg-gradient-to-b from-primary-green/[.5] to-yellow-500/[.5] opacity-0.1'>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true} // if you want navigation buttons
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className='mySwiper'
        >
          {hospitals.map((hospital, index) => {
            const hospitalUsers = users.filter(
              (user) => user.hospital === hospital.name
            );
            return (
              <SwiperSlide
                key={index}
                className='flex align-middle justify-center h-full'
              >
                <div className='bg-gradient-to-r from-primary-green/[.1] to-primary-green/[1] shadow h-full '>
                  <img
                    src={hospital.pictureSrc}
                    alt={hospital.name}
                    className='w-full h-64 object-contain mb-4 bg-white'
                  />
                  <h2 className='to-yellow-500 text-sm font-semibold p-2 text-white drop-shadow-xl'>
                    {hospital.name}
                  </h2>
                  {hospitalUsers.length > 0 ? (
                    <ol className='list-decimal pl-4'>
                      {hospitalUsers.map((user, idx) => (
                        <li
                          key={idx}
                          className='ml-2 text-white drop-shadow-2xl'
                        >
                          <div className='flex items-center'>
                            <span className='text-base md:text-xs lg:text-sm'>
                              Dr. {capitalizeFirstLetter(user.nickName)} -{' '}
                              {user.role}
                            </span>
                            <span
                              className='cursor-pointer ml-auto text-red-500 rounded-md text-center text-xs pr-2'
                              onClick={() => handleDeleteClick(user)}
                            >
                              Remove
                            </span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <p className='text-white p-2'>No members yet.</p>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <p className='text-left text-xs text-primary-yellow font-light mb-2 bg-primary-green'>
        *For removal of entry please email{' '}
        <a
          href='mailto:admin@vmmc.ph'
          target='_blank'
          className='underline text-blue-600 hover:text-blue-800'
        >
          admin@vmmc.ph
        </a>
      </p>
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
