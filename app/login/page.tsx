'use client';

import CustomBtn from 'app/components/customBtn';
import CustomInput from 'app/components/customInput';
import SocialBtn from 'app/components/socialBtn';
import { LoginForm } from 'app/interface/login';
import { handleForm } from 'app/login/action';
import { useFormState } from 'react-dom';

function LoginPage() {
  const [state, action] = useFormState(handleForm, {
    email: '',
    password: '',
  } as any);

  console.log('state', state.errors);

  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex gap-2 flex-col *font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">login with email&pw</h2>
      </div>
      <form className="flex flex-col gap-3" action={action}>
        <CustomInput
          name="email"
          type={'email'}
          placeholder="email"
          errors={['']}
        />
        <CustomInput
          name="password"
          type={'password'}
          placeholder="password"
          errors={state.errors ?? ['']}
        />

        <CustomBtn text={'login'} />
      </form>
      <SocialBtn />
    </div>
  );
}

export default LoginPage;
