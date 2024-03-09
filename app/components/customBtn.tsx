import React from 'react';

interface CustomBtnProps {
  loading: boolean;
  text: string;
}

function CustomBtn({ loading, text }: CustomBtnProps) {
  return (
    <button
      disabled={loading}
      className="h-10 primary-btn disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed"
    >
      {loading ? '로딩중...' : text}
    </button>
  );
}

export default CustomBtn;
