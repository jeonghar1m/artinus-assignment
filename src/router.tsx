import { BrowserRouter, Route, Routes } from "react-router";
import { Home, ProductDetail } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
