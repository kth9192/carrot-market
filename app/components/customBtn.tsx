'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';

interface CustomBtnProps {
  text: string;
}

function CustomBtn({ text }: CustomBtnProps) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="h-10 primary-btn disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {pending ? '로딩중...' : text}
    </button>
  );
}

export default CustomBtn;
