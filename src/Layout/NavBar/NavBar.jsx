import { Nav, Navbar } from 'react-bootstrap';

import SocialListNavBar from '../SocialList/SocialListNavBar';

import '../../Styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar_main'>
      <Navbar>
        <Nav>
          <a href="">lorem</a>
          <a href="">lorem</a>
          <a href="">lorem</a>
          <a href="">lorem</a>
          <a href="">lorem</a>
          <a href="">lorem</a>
          <a href="">lorem</a>
        </Nav> 
      </Navbar>
      <SocialListNavBar />   
  </div>
  )
}
export default NavBar
