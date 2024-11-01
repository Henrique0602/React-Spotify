import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header />
      <Container>
        <Sidebar>
          <CardSidebar />
         
        </Sidebar>
        <Outlet/>
      </Container>


    </>
  )
}

export default App
