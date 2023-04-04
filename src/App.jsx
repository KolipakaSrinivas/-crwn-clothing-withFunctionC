import { Route, Routes } from "react-router-dom"
import './app.css'


import HomePage from "./pages/HomePage/HomePage.component"
import ShopPage from "./pages/shop/shop-page.component"
import Header from './components/Header/Heade.component'
import SignInAndSingUp from "./pages/sign_n-and-sign_up/sign_n-sign_up.component"



function App() {

  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/shop" Component={ShopPage}/>
        <Route path="/sign" Component={SignInAndSingUp}/>
      </Routes>
    </div>
  )
}



export default App
