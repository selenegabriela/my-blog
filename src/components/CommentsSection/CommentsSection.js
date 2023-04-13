import React from 'react';

const CommentsSection = () => {
  return (
    <div id='comments-section' className="bg-black text-white py-8 px-6 w-3/5 mx-auto my-12 border-yellow-500 border-solid border-4">
      <h2 className="text-2xl text-white font-bold mb-6">Comments</h2>
      <form className="mb-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium mb-1">Name:</label>
          <input type="text" id="name" name="name" className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-black" required />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-lg font-medium mb-1">Comment:</label>
          <textarea id="comment" name="comment" rows="4" className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:border-black" required></textarea>
        </div>
        <button type="submit" className="bg-white text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-800">Post Comment</button>
      </form>
      <div className="space-y-6">
        <div className="border border-black rounded p-4">
          <h3 className="text-lg font-bold mb-2">John Doe</h3>
          <p className="mb-2">Great article, thanks for sharing!</p>
          <span className="text-gray-600 text-sm">Posted on 2023-04-12</span>
        </div>
        <div className="border border-black rounded p-4">
          <h3 className="text-lg font-bold mb-2">Jane Smith</h3>
          <p className="mb-2">I had a different experience, but appreciate your perspective.</p>
          <span className="text-gray-600 text-sm">Posted on 2023-04-11</span>
        </div>
        {/* more comments... */}
      </div>
    </div>
  );
};

export default CommentsSection;
