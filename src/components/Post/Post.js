import PostContext from '@/contexts/PostContext';
import { handleDeletePost } from '@/helpers/functions';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import SuccessMessage from '../SuccesMessage/SuccessMessage';


const Post = () => {
  const router = useRouter();
  const { posts, setPosts, deletePost } = useContext(PostContext);
  const { id } = router.query;
  const post = posts.find((post) => post.id === parseInt(id));

  const [ messageDelete, setMessageDelete ] = useState('');

  if (!post) {
    return <div>Loading...</div>;
  }

  const handleDelete = async() => {
    await handleDeletePost(post.id, null, deletePost, setMessageDelete, posts, setPosts)
    router.push('/posts')
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 mt-48">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-lg mb-4">by {post.author}</div>
      <div className="mb-4">
        <img src="/images/1.jpg" alt={post.title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>
      <div className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' }).replace(/^\w/, (c) => c.toUpperCase())}</div>
      <pre className="text-xl text-justify " style={{
        fontFamily: 'inherit',
        whiteSpace: 'pre-wrap',
        overflowX: 'auto',
        }}>{post.content}</pre>
      {messageDelete && <SuccessMessage>{messageDelete}</SuccessMessage>}
      <div className="mt-8 flex justify-end">
        <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">Delete</button>
        <button onClick={() => router.push(`edit/${post.id}`)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg">Edit</button>
      </div>
    </div>
  );
};

export default Post;
