import React from 'react';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => new Promise((resolve) => setTimeout(resolve, d * 1000));

  const onSubmit = async (data) => {
    await delay(2);
    console.log(data);
  };

  return (
    <div id='contact' className='bg-gradient-to-r overflow-hidden from-[#BBEEE0] to-[#E3E2E1] h-[90vh] w-full'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col justify-center items-center p-4'>
          <h1 className='text-3xl py-4 px-3 font-bold'>Connect with us</h1>
          <div className='px-4 py-4'>
            <h1 className='font-bold text-2xl px-2 py-2'>Main Office</h1>
            <p className='pl-2'>123 Anywhere St.</p>
            <p className='pl-2'>Any City, State</p>
            <p className='pl-2'>Any Country</p>
            <p className='pl-2'>(123) 456 7890</p>
          </div>
          <div className='px-4 py-4'>
            <h1 className='font-bold text-2xl px-2 py-2'>Social Media</h1>
            <p className='pl-2'>Facebook</p>
            <p className='pl-2'>Instagram</p>
            <p className='pl-2'>Twitter</p>
          </div>
          <h1 className='font-bold text-2xl px-6 py-4'>Email</h1>
          <p className='px-6'>hello@reallygreatsite.com</p>
        </div>

        <div className='flex flex-col m-6 px-6 bg-gradient-to-r from-[#C68EFD] to-[#E9A5F1] justify-center items-center'>
          {isSubmitting && <div className='text-lg font-bold'>Loading...</div>}
          <div className='container flex justify-center items-center'>
            <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit(onSubmit)}>
              <input
                className='py-3 px-6 m-2 border-2 bg-amber-200 border-dashed border-zinc-950'
                style={{ fontFamily: 'monospace' }}
                placeholder='Username'
                {...register('username', {
                  required: 'This field is required',
                  minLength: { value: 3, message: 'Min length is 3' },
                  maxLength: { value: 20, message: 'Max length is 20' },
                })}
              />
              {errors.username && <div className='text-red-500'>{errors.username.message}</div>}

              <input
                className='py-3 px-6 m-2 border-2 bg-amber-200 border-dashed border-zinc-950'
                style={{ fontFamily: 'monospace' }}
                placeholder='Email'
                type='email'
                {...register('email', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email format',
                  },
                })}
              />
              {errors.email && <div className='text-red-500'>{errors.email.message}</div>}

              <input
                className='py-3 px-6 m-2 border-2 bg-amber-200 border-dashed border-zinc-950'
                style={{ fontFamily: 'monospace' }}
                placeholder='Phone Number'
                type='tel'
                {...register('phoneNo', {
                  required: 'This field is required',
                  minLength: { value: 10, message: 'Min length is 10' },
                  maxLength: { value: 13, message: 'Max length is 13' },
                })}
              />
              {errors.phoneNo && <div className='text-red-500'>{errors.phoneNo.message}</div>}

              <input
                className='py-3 px-6 m-2 border-2 bg-amber-200 border-dashed border-zinc-950'
                style={{ fontFamily: 'monospace' }}
                placeholder='Password'
                type='password'
                {...register('password', {
                  required: 'This field is required',
                  minLength: { value: 4, message: 'Min length is 4' },
                  maxLength: { value: 8, message: 'Max length is 8' },
                })}
              />
              {errors.password && <div className='text-red-500'>{errors.password.message}</div>}

              <input
                disabled={isSubmitting}
                className='p-3 bg-amber-500 hover:bg-amber-600 hover:transition-transform transform-all duration-300 hover:scale-105 text-white font-bold text-2xl rounded-full cursor-pointer'
                type='submit'
                value='Submit'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
