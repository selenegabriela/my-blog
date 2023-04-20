import CommentsSection from "../CommentsSection/CommentsSection";
import Navbar from "../Navbar/Navbar";
import PostProvider from "@/contexts/PostProvider";
const Layout = ({children, notComments}) => {
  return (
    <PostProvider>
      <Navbar />
      {children}
      {!notComments && <CommentsSection/>}
    </PostProvider>
  )
}

export default Layout;
