import React from 'react'

const AddPost = () => {
  return (
    <>
    <div id='new-post-form' className="bg-black text-white py-8 px-6 w-3/5 mx-auto my-12 border-yellow-500 mt-60 border-solid border-4">
      <h2 className="text-2xl font-bold mb-6">New Post</h2>
      <form className="mb-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium mb-1">Title:</label>
          <input type="text" id="title" name="title" className="w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium mb-1">Content:</label>
          <textarea id="content" name="content" rows="4" className="w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-lg font-medium mb-1">Author:</label>
          <input type="text" id="author" name="author" className="w-full p-2 rounded border border-black focus:outline-none focus:border-yellow-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium mb-1">Image:</label>
          <input type="file" id="image" name="image" accept="image/*" className="w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" />
        </div>
        <button type="submit" className="bg-white text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-800">Save Post</button>
      </form>
    </div>

    </>
  )
}

export default AddPost