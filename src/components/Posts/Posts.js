import React, {useContext} from "react";
import PostContext from "@/contexts/PostContext";

const Posts = () => {
    
    const posts = useContext(PostContext);
    console.log(posts)
    return (
      <div className="grid mt-60 mx-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-lg"
        >
          <img
            className="w-full h-56 object-cover"
            src="images/1.jpg"
            alt={post.title}
          />
          <div className="px-4 py-2">
            <h2 className="text-2xl text-center font-bold text-yellow-500 mb-2">
              {post.title}
            </h2>
            <p className="text-base text-justify text-black">               
                {post.content
                  .split(" ")
                  .slice(0, 50)
                  .join(" ")
                }
            </p>
          </div>
        </div>
      ))}
    </div>
    );
  };

export default Posts;