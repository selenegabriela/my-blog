import PostContext from '@/contexts/PostContext';
import React, { useContext, useState } from 'react'
import ErrorMessage from '../errorMessage/ErrorMessage';
import SuccessMessage from '../SuccesMessage/SuccessMessage';
import { useRouter } from 'next/router';

const AddPost = () => {
  const router = useRouter();
  const {createPost} = useContext(PostContext)
  const [ newPost, setNewPost ] = useState({
    title: '',
    content: '',
    author: ''

  });
  const [ error, setError ] = useState('');
  const [ success, setSuccess ] = useState('');

  const handleChange = (e) => {
    setNewPost({...newPost, [e.target.name]: e.target.value}); 
  }

  const handleCreatePost = (e) => {

    e.preventDefault()

    const createPostAsync = async() => {
      try {
        await createPost(newPost);
        setSuccess('Nueva entrada creada correctamente');
        setTimeout(() => {
          setSuccess('');
          router.push('/posts')
        }, 2000)
        
      } catch (err) {
        setError(err.message)
        setTimeout(() => {
          setError('');
        }, 2000)
      }
    }

    createPostAsync()
    setNewPost({
      title: '',
      content: '',
      author: ''
  
    })

  };

  return (
    <>
    <div id='new-post-form' className="bg-black text-white py-8 px-6 w-3/5 mx-auto my-12 border-yellow-500 mt-60 border-solid border-4">
      <h2 className="text-2xl font-bold mb-6">New Post</h2>
      <form onSubmit={handleCreatePost} className="mb-6">
        <div className="mb-4 text-white">
          <label htmlFor="title" className="block text-lg font-medium mb-1">Title:</label>
          <input style={{color: 'black'}} onChange={handleChange} value={newPost.title ? newPost.title : ''} type="text" id="title" name="title" className="text-white w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium mb-1">Content:</label>
          <textarea style={{color: 'black'}} onChange={handleChange} value={newPost.content ? newPost.content : ''} id="content" name="content" rows="4" className="w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" required></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-lg font-medium mb-1">Author:</label>
          <input style={{color: 'black'}} onChange={handleChange} value={newPost.author ? newPost.author : ''} type="text" id="author" name="author" className="w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" required />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium mb-1">Image:</label>
          <input type="file" id="image" name="image" accept="image/*" className="w-full p-2 rounded border border-yellow-500 focus:outline-none focus:border-yellow-500" />
        </div>
        { error && <ErrorMessage>{error}</ErrorMessage>}
        { success && <SuccessMessage>{success}</SuccessMessage>}
        <br/>
        <button type="submit" className="bg-white text-black py-2 px-4 rounded cursor-pointer hover:bg-gray-800">Save Post</button>
      </form>
    </div>
    </>
  )
}

export default AddPost