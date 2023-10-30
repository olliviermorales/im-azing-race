'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from 'react-phone-number-input/input';
import { hospitals } from '@/helpers/helper';
import toast from 'react-hot-toast';

const initForm = {
  nickName: '',
  fullName: '',
  contactNumber: '',
  hospital: '',
  yearLevel: '',
  isContactable: false,
};

const Form = () => {
  const router = useRouter();
  const [form, setForm] = useState(initForm);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/users/new', {
        method: 'POST',
        body: JSON.stringify({
          nickName: form.nickName,
          fullName: form.fullName,
          contactNumber: form.contactNumber,
          hospital: form.hospital,
          yearLevel: form.yearLevel,
          isContactable: form.isContactable,
        }),
      });
      if (response.ok) {
        toast.success(`Congratulations! Welcome to the IM-AZING race!`, {
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
        });
        router.push('/thank-you');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputNumber = (value) => {
    if (value.length === 13) {
      setForm({
        ...form,
        contactNumber: value,
      });
      setError('');
    } else {
      setError('Invalid Contact Number');
    }
  };

  const handleBlur = () => {
    // Validate the contact number when the input field loses focus
    handleInputNumber(form.contactNumber);
  };

  return (
    <section
      id='form'
      className='pt-16 lg:pt-6 first-letter:xl:pt-24 bg-primary-green max-w-full my-auto w-full flex'
      style={{
        backgroundImage: "url('/assets/images/background-form.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='lg:w-1/2 lg:py-20 lg:px-6 xl:w-1/2 px-4 xl:py-48 xl:px-32 space-y-12'>
        <p className=' uppercase text-start w-full text-white text-5xl font-bold tracking-widest'>
          Let's Race!
        </p>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-2xl flex flex-col gap-6'
        >
          <div className='flex gap-2 scroll-smooth'>
            <div className='w-1/2'>
              <label>
                <span className='font-inter font-semibold text-base text-white'>
                  Full Name
                </span>
                <input
                  pattern='^[A-Za-z ]+$'
                  value={form.fullName}
                  onChange={(e) =>
                    setForm({ ...form, fullName: e.target.value })
                  }
                  placeholder='Full Name'
                  required
                  className='form_input'
                />
              </label>
            </div>
            <div className='w-1/2'>
              <label>
                <span className='font-inter font-semibold text-base text-white'>
                  Nickname
                </span>
                <input
                  pattern='^[A-Za-z]+$'
                  value={form.nickName}
                  onChange={(e) =>
                    setForm({ ...form, nickName: e.target.value })
                  }
                  placeholder='Nickname'
                  required
                  className='form_input'
                />
              </label>
            </div>
          </div>

          <label>
            <span className='font-inter font-semibold text-base text-white'>
              Contact Number
            </span>
            <Input
              country='PH'
              withCountryCallingCode
              onChange={(e) => setForm({ ...form, contactNumber: e })}
              value={form.contactNumber}
              required
              placeholder='+63'
              international
              className='form_input'
              maxLength={16}
              onBlur={handleBlur} // Validate the input when the field loses focus
            />
            {error && (
              <span className='text-red-400 text-sm mt-2'>{error}</span>
            )}
          </label>
          <label>
            <span className='font-inter font-semibold text-base text-white'>
              Year Level
            </span>
            <input
              pattern='^[0-9]{1,2}$'
              value={form.yearLevel}
              onChange={(e) => {
                // Use regex to allow only numeric input with a maximum length of 2
                const input = e.target.value.replace(/\D/g, '').slice(0, 2);
                setForm({ ...form, yearLevel: input });
              }}
              placeholder='Year Level'
              required
              className='form_input'
              maxLength='2'
              type='text'
            />
          </label>

          <label>
            <span className='font-inter font-semibold text-base text-white'>
              Hospital
            </span>
            <select
              onChange={(e) => setForm({ ...form, hospital: e.target.value })}
              required
              className='form_input'
              value={form.hospital} // Add this line to control the selected value
            >
              <option value='' hidden>
                Choose a hospital
              </option>
              {hospitals.map((hospital, index) => (
                <option key={index} value={hospital.name}>
                  {hospital.name}
                </option>
              ))}
            </select>
          </label>
          <div className='flex'>
            <label htmlFor='isContactable' className='text-white'>
              <input
                id='isContactable'
                value={form.isContactable}
                onChange={(e) =>
                  setForm({ ...form, isContactable: e.target.checked })
                }
                type='checkbox'
                className='checked:bg-blue-500 mb-auto'
              />{' '}
              The organizer and its event partner may contact me using the
              contact info that I entered in this online registration form.
            </label>
          </div>
          <div className='w-full flex flex-col mb-5 gap-4'>
            <button
              type='submit'
              disabled={error}
              className='py-3 text-lg font-bold tracking-wider bg-primary-yellow rounded-full text-primary-green'
            >
              {submitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <div className='lg:w-1/2'></div>
    </section>
  );
};

export default Form;
