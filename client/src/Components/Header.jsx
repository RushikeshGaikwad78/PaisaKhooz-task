import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-2">
        <Link to='/'> <h1 className="font-semibold">PaisaKhooz</h1></Link>
        <ul className="flex gap-4">
         <Link to='/'><li>Home</li></Link>
         <Link to='/about'><li>About</li></Link>
         <Link to='/signin'><li>SignIn</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;