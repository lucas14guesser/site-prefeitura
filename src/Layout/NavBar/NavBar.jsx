import { Nav, Navbar } from 'react-bootstrap';

import SocialListNavBar from '../SocialList/SocialListNavBar';

import '../../Styles/NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar_main'>
      <Navbar>
        <Nav>
          <div className="navbar_intra">
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
            <a href="">lorem</a>
          </div>                 
        </Nav>
        <div className='navbar_intra_social'>
          <SocialListNavBar />   
        </div>
      </Navbar> 
  </div>

  )
}
export default NavBar
