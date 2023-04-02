import { Route, Routes } from "react-router-dom"



import HomePage from "./pages/HomePage/HomePage.component"
import ShopPage from "./pages/shop/shop-page.component"





function App() {

  return (

    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/shop" Component={ShopPage}/>

      </Routes>
    </div>
  )
}



export default App
