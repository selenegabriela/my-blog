import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Frijole&family=Luckiest+Guy&family=Rubik+Vinyl&display=swap" rel="stylesheet" />
      </Head>    
      <div className="fixed w-full h-1/3">
          <div className="bg-black w-full pb-0 pt-2 relative">
            <Link href='/' className="rubyk text-white ml-12">Blitz</Link>
            <Image 
              priority
              src='/images/logo.png'
              width={150}
              height={150}
              className="absolute -ml-16 left-2/4 -translate-y-20 rounded-full border-solid border-4 border-yellow-400 "
            />
            <input 
              type='text' 
              placeholder='Buscar'
              className="absolute left-3/4 mt-6 ml-24 border-double rounded"
            />
          </div>
          <div className="w-full pb-0 pt-2 shadow-md rounded-b-md">
            <Link href="/" className="rubyk text-black ml-24">& Bella</Link>
            <div className="flex">
              <div className="flex gap-4 my-0 mx-auto">
                <Link href='#'>Inicio</Link>
                <Link href='#'>Posts</Link>
                <Link href='#'>Sobre nosotros</Link>
                <Link href='#'>Suscripciones</Link>
                <Link href='#'>Comentarios</Link>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar