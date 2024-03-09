import Link from 'next/link';
import { ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import React from 'react';
import CustomInput from 'app/components/customInput';
import CustomBtn from 'app/components/customBtn';
import SocialBtn from 'app/components/socialBtn';

function SMSLoginPage() {
  return (
    <div className="flex flex-col gap-10 px-6 py-8">
      <div className="flex gap-2 flex-col *font-medium">
        <h1 className="text-2xl">SMS Login</h1>
        <h2 className="text-xl">Verify your phone number</h2>
      </div>
      <form className="flex flex-col gap-3">
        <CustomInput type={'number'} placeholder="phone number" errors={['']} />
        <CustomInput
          type={'number'}
          placeholder="verification code"
          errors={['']}
        />

        <CustomBtn loading={false} text={'verify'} />
      </form>
    </div>
  );
}

export default SMSLoginPage;
