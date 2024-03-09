import Link from 'next/link';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import React from 'react';
import CustomInput from 'app/components/customInput';
import CustomBtn from 'app/components/customBtn';
import SocialBtn from 'app/components/socialBtn';

function LoginPage() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex gap-2 flex-col *font-medium">
        <h1 className="text-2xl">안녕하세요</h1>
        <h2 className="text-xl">login with email&pw</h2>
      </div>
      <form className="flex flex-col gap-3">
        <CustomInput type={'email'} placeholder="email" errors={['']} />
        <CustomInput type={'password'} placeholder="password" errors={['']} />

        <CustomBtn loading={false} text={'login'} />
      </form>
      <SocialBtn />
    </div>
  );
}

export default LoginPage;
