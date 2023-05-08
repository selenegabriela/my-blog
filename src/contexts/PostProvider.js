import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import PostContext from "./PostContext";

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });

  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await axios.get(`http://localhost:3001/blog-posts/?page=${pagination.page}`);
      const { posts: newPosts, pagination: newPagination } = data;
      setPosts(newPosts);
      setPagination(newPagination);
    };
    getPosts();
  }, [pagination.page]);

  const createPost = async (newPost) => {
    await axios.post('http://localhost:3001/blog-posts/', newPost);
  };

  const deletePost = async(postId) => {
    const {data: { message }} = await axios.delete(`http://localhost:3001/blog-posts/${postId}`)
    return message;
  }

  const handleSearch = async (searchWord) => {
    // execute Sequelize query to search for posts
    const { data } = await axios(`http://localhost:3001/blog-posts/search?q=${searchWord}`);
    setSearchResults(data);
    setIsModalOpen(true);
  };

  return (
    <PostContext.Provider value={{ 
      posts,
      setPosts, 
      pagination, 
      setPagination, 
      createPost, 
      deletePost,
      handleSearch,
      searchResults,
      isModalOpen,
      setIsModalOpen,
      setSearchResults
      }}>
      {children}
    </PostContext.Provider>
  );
};


export default PostProvider
  