import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { handleDeletePost } from '@/helpers/functions';
import PostContext from '@/contexts/PostContext';
import SuccessMessage from '../SuccesMessage/SuccessMessage';

const EditPost = ({ post }) => {
  const { posts, setPosts, deletePost } = useContext(PostContext);
  const router = useRouter();

  // const [image, setImage] = useState(post.image);
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [author, setAuthor] = useState(post.author);

  const [ messageSuccess, setMessageSuccess ] = useState('');

  const handleDelete = async() => {
    await handleDeletePost(post.id, null, deletePost, setMessageSuccess, posts, setPosts)
    router.push('/posts')
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    // Here you would normally submit the updated post data to the server
    // using a function from the post provider or some other API
    // For the sake of this example, we will just console log the updated data
    const updatedPost = {
      id: post.id,
      title,
      content,
      author
    };

    console.log(updatedPost)
    await axios.put(`http://localhost:3001/blog-posts/${post.id}`, updatedPost)
    // After submitting the updated data, we redirect to the post page
    setMessageSuccess('Los cambios se actualizaron de manera exitosa');
    setTimeout(() => {
      setMessageSuccess('')
      router.push(`/posts/${post.id}`);
    }, 3000)
  };

  const handleCancel = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-44">
      <h1 className="text-3xl font-bold mb-4 ">Edit Post</h1>
      {messageSuccess && <SuccessMessage>{messageSuccess}</SuccessMessage>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="image" className="block font-medium">Image URL</label>
          <input type="text" id="image" name="image" onChange={(event) => setImage(event.target.value)} className="w-full py-2 px-4 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="title" className="block font-medium">Title</label>
          <input type="text" id="title" name="title" value={title} onChange={(event) => setTitle(event.target.value)} className="w-full py-2 px-4 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="content" className="block font-medium">Content</label>
          <textarea id="content" name="content" value={content} onChange={(event) => setContent(event.target.value)} className="w-full py-2 px-4 border border-gray-300 rounded-lg" />
        </div>
        <div>
          <label htmlFor="author" className="block font-medium">Author</label>
          <input type="text" id="author" name="author" value={author} onChange={(event) => setAuthor(event.target.value)} className="w-full py-2 px-4 border border-gray-300 rounded-lg" />
        </div>
        <div className="flex justify-end">
          <button type="button" onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded-lg mr-4">Cancel</button>
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-4">Save Changes</button>
          <button type="button" onClick={() => handleDelete()} className="bg-red-500 text-white px-4 py-2 rounded-lg">Delete Post</button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
