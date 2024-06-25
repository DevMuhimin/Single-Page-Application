import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header shadow py-3">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Link to="/" href="">
                        <img style={{height:"25px"}} src="https://tds-images.thedailystar.net/sites/all/themes/sloth/logo.svg" alt="" />
                    </Link>
                </div>
                <div className="col-md-9">
                    <div className="menu">
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to = "/" className="nav-link" href="">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/team" className="nav-link" href="">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/about" className="nav-link" href="">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/blog" className="nav-link" href="">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to = "/counter" className="nav-link" href="">Counter</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Header;
