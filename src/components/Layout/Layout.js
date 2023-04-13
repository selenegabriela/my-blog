import CommentsSection from "../CommentsSection/CommentsSection";
import Navbar from "../Navbar/Navbar";
const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <CommentsSection/>
    </>
  )
}

export default Layout;
