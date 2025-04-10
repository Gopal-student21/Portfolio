
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'

function App() {
  let router = createBrowserRouter([
    {
      path:"/",
      element: <> <Navbar /><Home/></>
    },
    {
      path:"/about",
      element: <> <Navbar/><About/></>
    },
    {
      path:"/projects",
      element: <> <Navbar/><Projects/></>
    },
    {
      path:"/contact",
      element: <> <Navbar/><Contact/></>
    },
    
  ])

  return (
    <>
  <RouterProvider router ={router}/>
    </>
  )
}

export default App
