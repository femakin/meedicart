import React from 'react'

import Header from './Components/Navbar/Header'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signup from './Components/Pages/Signup'
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import Error from './Components/Pages/Error'


export default function App() {
  return (
    
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
      
      
       <Route path="/" component={Home} exact/>
      <Route path="/signup" component={Signup}/>
      <Route path="/login" component={Login}/>
      <Route component={Error}/>
      </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  )
}
