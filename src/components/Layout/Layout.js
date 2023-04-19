import CommentsSection from "../CommentsSection/CommentsSection";
import Navbar from "../Navbar/Navbar";
const Layout = ({children, notComments}) => {
  return (
    <>
      <Navbar />
      {children}
      {!notComments && <CommentsSection/>}
    </>
  )
}

export default Layout;
