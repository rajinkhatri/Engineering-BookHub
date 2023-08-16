import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <!-- Nav bar -->
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
        <div className="container-fluid d-flex align-items-center">
                {/* <!-- logo  --> */}
            <div className="logo d-flex">
                <Link className="navbar-brand" to="#">BookHub</Link>
            </div>
                {/* <!-- end of logo --> */}
            <div className="links">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                        </li>
        
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">About Us</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active premium" aria-current="page" to="{% url 'base' %}">Support Team </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active premium" aria-current="page" to="#">Contact </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16" style={{transform: "scale(1.5)"}}>
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                              </svg>
                        </Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> 
                        <button className="btn btn-outline-success" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </button>
                    </form> 
                </div>
            </div>
          </div>
      </nav>
  )
}

export default Navbar;