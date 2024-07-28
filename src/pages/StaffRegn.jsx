import React from 'react';
import { useForm } from 'react-hook-form';

const staffRegn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
  };

  return (
    <div className="max-w-5xl mt-6 mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Staff Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" {...register('name', { required: 'Name is required' })} />
          {errors.name && <span>{errors.name.message}</span>}
        </
        <div>
          <label>Email:</label>
          <input {...register('email', { required: 'Email is required', pattern: { value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/, message: 'Invalid email address' } })} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div>
          <label>Qualification:</label>
          <input {...register('qualification', { required: 'Qualification is required' })} />
          {errors.qualification && <span>{errors.qualification.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>  
  );
};

export default staffRegn;
