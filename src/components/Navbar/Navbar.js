import PostContext from "@/contexts/PostContext"
import SearchModal from "@/modals/SearchModal/SearchModal"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useContext, useState } from "react"
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const { handleSearch, searchResults, isModalOpen } = useContext(PostContext);

  const [ searchWord, setSearchWord ] = useState('');

  
  const handleSearchPost = async() => {
    await handleSearch(searchWord);
    setSearchWord('')
  }

  const handleChange = e => {
    setSearchWord(e.target.value);
  }
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Frijole&family=Luckiest+Guy&family=Rubik+Vinyl&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>    
      <div className="fixed top-0 z-10 w-full h-1/3">
          <div className="bg-black w-full pb-0 pt-2 relative border-solid border-l-4 border-yellow-400">
            <Link href='/' className="rubyk text-white ml-12">Blitz</Link>
            <Image 
              priority
              src='/images/logo.png'
              width={150}
              height={150}
              className="absolute -ml-16 left-2/4 -translate-y-20 rounded-full border-solid border-4 border-yellow-400 "
            />
            <div className="absolute flex top-0 right-3 gap-2 mt-6 ml-24">  
              {/* <i className="absolute fa-solid fa-magnifying-glass mt-1 ml-1"></i> */}
              <input
                onChange={e => handleChange(e)}
                value={searchWord}
                className=" border-double rounded pl-6"
                type='text'
                placeholder="Buscar"
              />
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-400 text-white hover:bg-gray-500 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-500"
                onClick={handleSearchPost}
              >
                <FiSearch size={24} />
              </button>
      <SearchModal results={searchResults} isModalOpen={isModalOpen}/>

            </div>
          </div>
          <div className="w-full bg-white pb-0 pt-2 shadow-md border-solid border-t-4 border-r-4 border-yellow-400 rounded-b-md">
            <div className="flex justify-between">
              <Link href="/" className="rubyk text-black ml-40">& Bella</Link>
              <div className="flex gap-4 mt-12 mr-14">
                <Link href='/'>Inicio</Link>
                <Link href='/posts'>Posts</Link>
                <Link href='/'>Nosotros</Link>
                <Link href='/create-post'>Add a Post</Link>
                <Link href='/#comments-section'>Comentarios</Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar