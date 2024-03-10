'use server';

import { LoginForm } from 'app/interface/login';
import { redirect } from 'next/navigation';

export const handleForm = async (prevState: any, formData: FormData) => {
  return {
    errors: ['wrong pw', 'too short'],
  };
};
