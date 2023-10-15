import React, { useEffect, useState } from 'react';

const DeleteModal = ({
  showModal,
  setShowModal,
  handleDeleteConfirm,
  setDeleteError,
  deleteError,
  loading,
}) => {
  const [password, setPassword] = useState('');

  useEffect(() => {
    setPassword('');
  }, [showModal]);

  return (
    showModal && (
      <div className='fixed inset-0 flex items-center justify-center z-50'>
        <div className='bg-white p-8 rounded shadow-lg'>
          <h2 className='text-xl font-semibold mb-4'>Confirm Deletion</h2>
          <input
            type='password'
            placeholder='Enter your password'
            className='mb-4 p-2 border border-gray-300 rounded w-full'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {deleteError && <p className='text-red-500 mb-4'>{deleteError}</p>}
          <div className='flex justify-end'>
            <button
              className='mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
              onClick={() => handleDeleteConfirm(password)}
            >
              {loading ? 'Confirming...' : 'Confirm'}
            </button>
            <button
              className='px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400'
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
