import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StartSession from "../pages/StartSession";
import HomeInfo from "../pages/HomeInfo";
import Products from "../pages/Products";
import InfoProducts from "../pages/InfoProducts";
import Trolley from "../pages/Trolley";
import Buys from "../pages/Buys";
import NotFound from "../pages/NotFound";
import SuccessFull from "../pages/SuccessFull";
import StatesComponents from "../useContex/StatesComponents";

const AppRoutes = () => {
  
  return (
    <div>
      <BrowserRouter>
        <StatesComponents>
          <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<StartSession />} />
            <Route path="homeInfo" element={<HomeInfo />} />
            <Route path="products" element={<Products />} />
            <Route path="infoProducts" element={<InfoProducts />} />
            <Route path="trolley" element={<Trolley />} />
            <Route path="buys" element={<Buys />} />
            <Route path="successFull" element={<SuccessFull />} />
            <Route path="/" component={<Navigate to="/StartSeccion" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </StatesComponents>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;

