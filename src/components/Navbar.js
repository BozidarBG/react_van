import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="main_navigation">
    <div className="logo">
      <Link className='main_navigation_link' to="/">#VANLIFE</Link>
    </div>
    <div className="right_navigation">
      <Link className='main_navigation_link' to="/">Home</Link>
      <Link className='main_navigation_link' to="/about">About</Link>
    </div>

  </nav>
  )
}