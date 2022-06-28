import React from 'react';

function Create() {
  return (
    <div className="space-y-5 py-10 px-4">
      <div>
        <label
          htmlFor="name"
          className="text-medium mb-1 block text-sm text-gray-500"
        >
          Name
        </label>
        <div className="relative flex items-center  rounded-md shadow-sm">
          <input
            id="name"
            type="email"
            className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            required
          />
        </div>
      </div>
      <div className="my-5">
        <label
          htmlFor="price"
          className="text-medium mb-1 block text-sm text-gray-500"
        >
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="pointer-events-none absolute left-0 flex items-center  justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            type="text"
            id="price"
            placeholder="0.00"
            className="w-full appearance-none px-3 pl-7 focus:ring-orange-500"
          />
          <div className="pointer-events-none absolute right-0 flex items-center pr-3">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="text-medium mb-1 block text-sm text-gray-500">
          Description
        </label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500   focus:ring-orange-500"
        />
      </div>
      <button className="mt-5 w-full rounded bg-orange-500 py-2 text-white">
        Go live
      </button>
    </div>
  );
}

export default Create;
