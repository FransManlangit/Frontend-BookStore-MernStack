import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import CreateBooks from './pages/books/CreateBooks';
import EditBook from './pages/books/EditBook';
import DeleteBook from './pages/books/DeleteBook';
import ShowBook from './pages/books/ShowBook';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
 <div className='w-4/5 m-auto'>
  <Navbar/>
 </div>
  )
}

// const App = () => {
//   return (
//     <Routes>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/books/create' element={<CreateBooks/>}/>
//     <Route path='/books/edit/:id' element={<EditBook/>}/>
//     <Route path='/books/delete/:id' element={<DeleteBook/>}/>
//     <Route path='/books/details/:id' element={<ShowBook/>}/>
//     </Routes>
//   )
// }

export default App