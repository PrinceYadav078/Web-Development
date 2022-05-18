import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
      <div style={{display:'flex' , padding:'0.5rem'}}>
        <Link to='/' style={{textDecoration: 'none'}}><h1>MoviesApp</h1></Link>
        <Link to='/favourites' style={{textDecoration: 'none'}}><h1><h2 style={{marginLeft: '2rem' , marginTop:'0.5rem'}}>Favourates</h2></h1></Link>
          
      </div>
    )
  }
}

export default Navbar