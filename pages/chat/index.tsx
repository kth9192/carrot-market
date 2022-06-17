import React from 'react';

function Chats() {
  return (
    <div className=" divide-y-[1px] py-10">
      <div className=" itemes-center flex  cursor-pointer space-x-3 py-3 px-4 ">
        <div className="h-12 w-12 rounded-full bg-slate-300" />
        <div>
          <p className=" text-gray-700">Steve Jebs</p>
          <p className="text-sm  text-gray-500">
            See you tomorrow in the cornder at 2pm!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
