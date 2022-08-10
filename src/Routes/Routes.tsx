import { BrowserRouter, Routes, Route } from "react-router-dom";
// import your route components too
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Checkout } from "../pages/Checkout";
import { Success } from "../pages/Success";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/success" element={<Success />}/>
    </Routes>
    </BrowserRouter>
  );
};
