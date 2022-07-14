import React,{useContext} from 'react'
import "./Navbar.css"
import { globalcontext } from '../Context API/contextProvider'

function Navbar() {
    



  return (
    <header className='navbar'>
        <nav>
            <div className="left">

                <h3>AK's Task</h3>
            </div>
            <div className="right">
                  <button className='info' >info</button>
                <button className='task'>task</button>
            </div>
        </nav>


    </header>
  )
}

export default Navbar