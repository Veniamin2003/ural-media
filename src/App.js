import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CartContainer from "./Components/Cart/CartContainer";
import BidContainer from "./Components/BidPage/Bid/BidContainer";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route exact path="/" element={<Navigate to={"/cart"}/>}></Route>

                  <Route path='/cart'
                         element={<CartContainer/>}/>
                  <Route path='/cart/order'
                         element={<BidContainer/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
