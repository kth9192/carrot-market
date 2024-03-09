import Card from 'app/components/card';
import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-6">
      <div className="flex flex-col items-center gap-2 my-auto *:font-medium">
        <span className="text-4xl">🥕</span>
        <h1 className="text-9xl">당근</h1>
        <h2 className="">당근 마켓에 어서오세요</h2>
      </div>

      <div className="flex flex-col items-center w-full gap-3 text-lg font-medium ">
        <Link href="/creatre-account" className="primary-btn text-lg py-2.5">
          시작하기
        </Link>

        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline underline-offset-4">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
