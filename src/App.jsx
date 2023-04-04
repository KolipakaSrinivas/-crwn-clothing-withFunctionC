import { Route, Routes } from "react-router-dom"
import './app.css'


import HomePage from "./pages/HomePage/HomePage.component"
import ShopPage from "./pages/shop/shop-page.component"
import Header from './components/Header/Heade.component'



function App() {

  return (

    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/shop" Component={ShopPage}/>

      </Routes>
    </div>
  )
}



export default App
