import ChatBubbleOvalLeftEllipsisIcon from '@heroicons/react/24/solid/ChatBubbleOvalLeftEllipsisIcon';
import Link from 'next/link';
import React from 'react';

interface SocialBtnProps {}

function SocialBtn({}: SocialBtnProps) {
  return (
    <>
      <div className="w-full h-px bg-neutral-500"></div>
      <div className="flex flex-col">
        <Link
          href={'/sms'}
          className="flex items-center justify-center h-10 gap-2 primary-btn"
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />
          </span>
          <span>Continue with sms</span>
        </Link>
      </div>
    </>
  );
}

export default SocialBtn;
