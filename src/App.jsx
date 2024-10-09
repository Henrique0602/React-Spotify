import { useState } from "react"
import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import Header from "./components/Header"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import { useEffect } from "react"

function App() {

    const [artistas, setArtistas] = useState([])

    useEffect(()=>{

      fetch('http://localhost:3000/artistas')
      .then(res => res.json())
      .then(res => setArtistas(res))
      .catch(err => console.log(err))
      .finally(()=> console.log("Acabou!"))

    },[])



  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
          <CardSidebar />
          <CardSidebar />
        </Sidebar>
        <Main>

          <h1>Gênero Trap</h1>
          {
            artistas
            .filter(artistas => artistas.genero === "Trap")
            
            .map( artistas => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
              <p>{artistas.name}</p>
            </div>
            ))
          }
       
        </Main>
      </Container>


    </>
  )
}

export default App
