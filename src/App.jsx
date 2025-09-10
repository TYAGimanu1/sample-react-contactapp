import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Insert from './components/Insert'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import Card from './components/Card'
import Edit from './components/Edit'
import DeleteData from './components/DeleteData'

const App = () => {
  return (
    <>
    <header>
      <Link to="/" className='title'>Contact app</Link>

      <ul>
        <li><NavLink to="/insert">Insert</NavLink></li>
        <li><NavLink to="/view">View</NavLink></li>
        <li><NavLink to="/update">Update</NavLink></li>
        <li><NavLink to="/delete">Delete</NavLink></li>
      </ul>
      </header>
       <main>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/insert' element={<Insert/>}></Route>
        <Route path='/view' element={<View/>}></Route>
        <Route path='/card' element={<Card/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path='/delete' element={<Delete/>}></Route>
        <Route path='/deletedata/:id' element={<DeleteData/>}></Route>
        <Route path='*'element={<h1>App not found</h1>}></Route>
      </Routes>
      </main>
    
    </>
  )
}

export default App