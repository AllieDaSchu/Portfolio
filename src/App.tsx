import './App.css'
import Nav from "./components/Nav.tsx"
import Home from "./pages/Home.tsx"
import WebProjects from "./pages/WebProjects.tsx"
import ContactMe from "./pages/ContactMe.tsx"
import Footer from "./components/Footer.tsx"
import NotFound from "./pages/NotFound.tsx"
import {HashRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <HashRouter>
      <Nav />
      <div className="min-h-[100vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webProjects" element={<WebProjects />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </HashRouter>
    <Footer />
    </>
  )
}

export default App
