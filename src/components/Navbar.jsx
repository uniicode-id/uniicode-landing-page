import {Link, Outlet} from 'react-router'
import Button from "@components/Button.jsx";

function Navbar() {
  return (
    <>
      <nav className="bg-brand-dark py-10 font-pixel">
        <ul className="flex justify-center space-between gap-12">
          <Link to="/">
            <Button>Home</Button>
          </Link>
          {/*<Link to="/merch">*/}
            <Button>Merch</Button>
          {/*</Link>*/}
          <Link to="/events">
            <Button>Events</Button>
          </Link>
          {/*<Link to="/projects">*/}
            <Button>Projects</Button>
          {/*</Link>*/}
        </ul>
      </nav>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default Navbar;