import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Category from './Components/Category'
import Support from './Components/Support'


function App() {
//   const router = createBrowserRouter([
// {
//       path: '/',
//       element: <><Navbar /><Home /></>,
//     },
//     {
//       path: '/about',
//       element: <><Navbar /><About /></>,
//     },
//     {
//       path: '/category',
//       element: <><Navbar /><Category /></>,
//     },
//     {
//       path: '/support',
//       element: <><Navbar />< Support /></>,
//     },
//     {
//       path: '/contact',
//       element: <><Navbar /><Contact /></>,
//     },    
  // ])  

  return (
    <>
     
      {/* <RouterProvider router={router} /> */}
      <div className="" id=""><Navbar/></div>
      <div className="" id="Home"><Home/></div>
      <div className="" id="About"><About/></div>
      <div className="" id="Category"><Category/></div>
      <div className="" id="Support"><Support/></div>
      <div id="Contact"> <Contact/></div>
      
      
      
      
      
     
    </>
  )
}

export default App
