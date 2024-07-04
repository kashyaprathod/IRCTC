import React from 'react';

const BookingFrom = () => {
  return (
    <div className="min-h-screen max-w-full flex items-center justify-center bg-gray-100">
      <div className="max-w-80 bg-white p-8 border border-gray-300 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">BOOK TICKET</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">From</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="From"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">To</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              placeholder="To"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              defaultValue="2024-07-04"
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700">Class</label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500">
              <option value="all-classes">All Classes</option>
            </select>
          </div> */}
          {/* <div className="mb-4">
            <label className="block text-gray-700">Category</label>
            <select className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500">
              <option value="general">General</option>
            </select>
          </div> */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Book Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingFrom;
