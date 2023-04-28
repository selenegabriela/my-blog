import React, { useContext } from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import PostContext from "@/contexts/PostContext";

const Posts = () => {
  const { posts, pagination, setPagination, deletePost } = useContext(PostContext);

  const handlePrevPage = () => {
    if(pagination.page > 1){
      setPagination({...pagination, page: pagination.page-1})
    }
  }

  const handleDeletePost = (postId) => {
    deletePost(postId);
  };

  const handleNextPage = () => {
    if (pagination.page < pagination.totalPages) {
      setPagination({ ...pagination, page: pagination.page + 1 });
    }
  };

  return (
    <div className="grid mt-60 mx-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg relative hover:border-4 hover:border-yellow-500"
        >
          <Link className="hover:opacity-90" href={`/posts/${post.id}`}>
          
              <img
                className="w-full h-56"
                src="images/1.jpg"
                alt={post.title}
              />
              <div className="px-4 py-2">
                <h2 className="text-2xl text-center font-bold text-yellow-500 mb-2 ">
                  {post.title}
                </h2>
                <p className="text-base text-justify text-black hover:text-gray-800 transition-colors duration-300">
                  {post.content
                    .split(" ")
                    .slice(0, 50)
                    .join(" ")}
                </p>
              </div>
            
          </Link>
          <div className="absolute top-0 left-0 m-4 flex">
            <button
              className="p-2 rounded-full bg-transparent hover:bg-red-500 hover:text-white transition-colors duration-200"
              onClick={() => handleDeletePost(post.id)}
            >
              <FaTrash />
            </button>
            <Link href={`/posts/${post.id}/edit`}>
              <button className="p-2 ml-2 rounded-full bg-transparent hover:bg-yellow-500 hover:text-white transition-colors duration-200">
                <FaEdit />
              </button>
            </Link>
          </div>
        </div>
      ))}
      <button onClick={handlePrevPage}>Previous Page</button>
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
};

export default Posts;
