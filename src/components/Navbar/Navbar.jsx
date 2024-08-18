import { NavLink } from "react-router-dom/cjs/react-router-dom";
import "./Navbar.css"
import { useSelector } from "react-redux";
import { useContext } from "react";
import { LangContext } from "../contexts/langContext";
export default function Navbar() {
  // *selectors
  const MyCount =useSelector((state)=>state.myCount.count)
  const { lang, setLang } = useContext(LangContext);  
  // const changeLang=(language)=>{
  //   setLang(language)
  //   console.log(lang);
    
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg navColor ">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="#">Movies</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink to="" className="nav-link text-white" href="#">Home</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink to="favourite" className="nav-link text-white" href="#">Favourites <span className="text-danger fs-6">{MyCount}</span></NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Languages
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li><a className={`dropdown-item ${lang=='en'?"bg-danger":''}`} onClick={()=>(setLang('en'))}>EN</a></li>
            <li><a className={`dropdown-item ${lang=='ar'?"bg-danger":''}`}onClick={()=>(setLang("ar"))} >AR</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavLink to="login" className="nav-link text-white">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="register" className="nav-link text-white">Register</NavLink>
        </li>
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}
