import React, {useState, useEffect} from 'react'
import {useDispatch} from 'reacr-redux'
import './App.class'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Header } from './components'
 
function App() {
//  console.log(process.env.REACT_APP_APPWRITE_URL);
//  console.log(import.meta.env.VITE_APPWRITE_URL);
const [loading, setLoading] = useState(true)
const dispatch = useDispatch()

useEffect(() => {
authService.getCurrentUser()
.then((userData) => {
  if(userData) {
    dispatch(login({userData}))
  }else{
    dispatch(logout())
  }
})
.finally(() =>setLoading(false))
}, [])

  return !loading ? (
    <div className='min-h-secreen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          {/* {outlet} */}
        </main>
        <Footer/>
      </div>
    </div>
  ): null
}


export default App
