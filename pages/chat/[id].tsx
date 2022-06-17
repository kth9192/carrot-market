import React from 'react';

function ChatDetail() {
  return (
    <div className="space-y-4 py-10 px-4">
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-slate-400" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700 ">
          <p>hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
        <div className="h-8 w-8 rounded-full bg-slate-400" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700 ">
          <p>i want 20,000</p>
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="h-8 w-8 rounded-full bg-slate-400" />
        <div className="w-1/2 rounded-md border border-gray-300 p-2 text-sm text-gray-700 ">
          <p>미쳤어</p>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-4 mx-auto w-full max-w-md">
        <div className="relative flex items-center px-2 py-2">
          <input
            type="text"
            className="w-full rounded-full border-gray-300 pr-12 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
          <div className="absolute  right-0 flex pr-4">
            <button className="flex items-center rounded-full bg-orange-500 px-3 text-sm text-white hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatDetail;
