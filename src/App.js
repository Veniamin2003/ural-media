import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CartContainer from "./Components/Cart/CartContainer";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route exact path="/" element={<Navigate to={"/cart"}/>}></Route>

                  <Route path='/cart'
                         element={<CartContainer/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
