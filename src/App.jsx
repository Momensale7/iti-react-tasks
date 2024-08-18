import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom"
import Login from "./components/Login/Login"
import Home from "./components/Home/Home"
import Register from "./components/Register/Register"
import Navbar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "@fortawesome/fontawesome-free/css/all.min.css"
import MovieDetails from "./components/MovieDetails/MovieDetails"
import Favourits from "./components/Favourits/Favourits"
import { LangContext } from "./components/contexts/langContext"
import { useState } from "react"

function App() {
  const [lang,setLang]=useState('ar')
  return (
    <>

    <BrowserRouter>
    <LangContext.Provider value={{lang,setLang}}>

    <Navbar/>
    <div className="bg-dark">
    <div className="container">
    <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/login" component={Login} exact/>
    <Route path="/register" component={Register} exact/>
    <Route path="/favourite" component={Favourits} exact/>
    <Route path="/movie/:id" component={MovieDetails} exact/>
    </Switch>
    </div>
    </div>
    </LangContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
