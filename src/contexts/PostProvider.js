import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import PostContext from "./PostContext";

const PostProvider = ({children}) => {

    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const postAsync = async()=> {

            const {data} = await axios.get('http://localhost:3001/blog-posts/');
            setPosts(data);
        }
        postAsync();
    }, [])
  return (
    <PostContext.Provider value={posts}>
        {children}
    </PostContext.Provider>
  )
}

export default PostProvider
  