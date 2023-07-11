import { ErrorMessage } from '@hookform/error-message';
import React from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  email: string;
  pw: string;
}

function Forms() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: 'onBlur',
  });

  const onInValid = (fieldErrors: FieldErrors) => {
    console.log('====================================');
    console.log(fieldErrors, errors);
    console.log('====================================');
  };

  const submitForm = (data: LoginForm) => {};

  return (
    <form
      className="flex flex-col items-center gap-2"
      onSubmit={handleSubmit(submitForm, onInValid)}
    >
      <input
        {...register('username', {
          required: 'username is required',
          minLength: {
            message: 'username should be longer then 5 chars',
            value: 5,
          },
        })}
        name="username"
        type="text"
        placeholder="username"
      />
      <ErrorMessage
        name={'username'}
        errors={errors}
        render={({ message }) =>
          message && <p className="font-medium text-red-500">{message}</p>
        }
      />
      <input
        type="email"
        {...register('email', {
          required: 'email is required',
          validate: {
            notGmail: (value) =>
              !value.includes('gmail.com') ? '' : 'gmail is not allowed',
          },
        })}
        placeholder="email"
        className={`${Boolean(errors.email?.message) ? 'border-red-500' : ''}`}
      />
      <ErrorMessage
        name="email"
        errors={errors}
        render={({ message }) =>
          message && <p className="font-medium text-red-500">{message}</p>
        }
      />
      <input
        type="password"
        {...register('pw', { required: 'password is required' })}
        placeholder="pw"
      />{' '}
      <ErrorMessage
        name="pw"
        errors={errors}
        render={({ message }) =>
          message && <p className="font-medium text-red-500">{message}</p>
        }
      />
      <button
        type="submit"
        className="h-[48px] w-[150px] bg-purple-500 text-white"
      >
        제출
      </button>
    </form>
  );
}

export default Forms;
