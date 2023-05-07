import Layout from '@/components/Layout/Layout';
import Post from '@/components/Post/Post';
import React from 'react'

// export async function getServerSideProps(context) {
//     const { id } = context.query;
//     // Fetch the post data using the post ID
//     // ...

//     return {
//       props: {
//         id,
//       },
//     };
//   }

const PostPage = () => {
  return (
    <Layout>
        <Post />
    </Layout>
  )
}

export default PostPage