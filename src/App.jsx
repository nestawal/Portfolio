import {React, usestate} from 'react'
import Nav from './Nav.jsx'
import Body from './Body.jsx'



export default function App() {
    return (
      <div className='whole'>
        <div className='navcont'><Nav className="nav" /></div>
        <Body />
      </div>
    )
}
  


