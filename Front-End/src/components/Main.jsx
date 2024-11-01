import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Main() {
  const [artistas, setArtistas] = useState([])

  useEffect(() => {

    fetch('http://react-spotify-ljb5.vercel.app/artistas')
      .then(res => res.json())
      .then(res => setArtistas(res))
      .catch(err => console.log(err))
      .finally(() => console.log("Acabou!"))

  }, [])

  return (
    <>


      <div className="bg-gray-600 w-3/4 grid grid-cols-4 pl-20 items-center">
        <h1 className="font-bold text-white text-xl">Gênero Trap</h1>

        {
          artistas
            .filter(artistas => artistas.genero === "Trap")
            .map(artistas => (
              <Link to={`/Artistas/${artistas._id}`}>
                <div
                  className="bg-black w-28 h-28 flex flex-col justify-around items-center"
                  style={{
                    backgroundImage: `url(${artistas.imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: 'skewY(-5deg)', 
                    height: '150px', 
                    width: '50%', 
                    borderRadius: '10px',   
                  }}>
                  <p className="text-white font-bold">{artistas.name}</p>
                </div>
              </Link>

            ))
        }




        <h1 className="font-bold text-white text-xl">Gênero Funk</h1>

        {
          artistas
            .filter(artistas => artistas.genero === "Funk")
            .map(artistas => (
              <Link to={`/Artistas/${artistas._id}`}>
                <div
                  className="bg-black w-28 h-28 flex flex-col justify-around items-center"
                  style={{
                    backgroundImage: `url(${artistas.imagem})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transform: 'skewY(-5deg)', 
                    height: '150px', 
                    width: '50%', 
                    borderRadius: '10px',   
                  }}>
                  <p className="text-white font-bold" >{artistas.name}</p>
                </div>
              </Link>

            ))
        }



<h1 className="font-bold text-white text-xl">Gênero Rock</h1>

{
  artistas
    .filter(artistas => artistas.genero === "Rock")
    .map(artistas => (
      <Link to={`/Artistas/${artistas._id}`}>
        <div
          className="bg-black w-28 h-28 flex flex-col justify-around items-center"
          style={{
            backgroundImage: `url(${artistas.imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'skewY(-5deg)', 
            height: '150px', 
            width: '50%', 
            borderRadius: '10px',   
          }}>
          <p className="text-white font-bold text-center">{artistas.name}</p>
        </div>
      </Link>

    ))
}




      </div>

    </>

  )

}