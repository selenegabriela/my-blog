import React from 'react'
import axios from 'axios'
import EditPost from '@/components/EditPost/EditPost';
import Layout from '@/components/Layout/Layout';

export async function getServerSideProps(context) {
    const { id } = context.query;
    // Fetch the post data using the post ID
    // ...

    const {data} = await axios.get(`http://localhost:3001/blog-posts/${id}`);

    return {
      props: {
        data,
      },
    };
  }

const PostEditPage = ({data}) => {
  return (
    <Layout notComments>
    
      <EditPost post={data} />
    </Layout>
  )
}

export default PostEditPage