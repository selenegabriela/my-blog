import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
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
            <div className="absolute inline left-3/4 mt-6 ml-24">  
              <i className="absolute fa-solid fa-magnifying-glass mt-1 ml-1"></i>
              <input 
                className=" border-double rounded pl-6"
                type='text'
                placeholder="Buscar"
              />
            </div>
          </div>
          <div className="w-full bg-white pb-0 pt-2 shadow-md border-solid border-t-4 border-r-4 border-yellow-400 rounded-b-md">
            <div className="flex justify-between">
              <Link href="/" className="rubyk text-black ml-40">& Bella</Link>
              <div className="flex gap-4 mt-12 mr-14">
                <Link href='/'>Inicio</Link>
                <Link href='#'>Posts</Link>
                <Link href='#'>Nosotros</Link>
                <Link href='#'>Suscripciones</Link>
                <Link href='#comments-section'>Comentarios</Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar