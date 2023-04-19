import AddPost from "@/components/AddPost/AddPost";
import Layout from "@/components/Layout/Layout";
import React from "react";

function CreatePost() {
  return (
    <Layout notComments={true}>    
      <AddPost/>
    </Layout>
  );
}

export default CreatePost;