import { BrowserRouter, Route, Routes } from "react-router";
import { Home, Product, Purchase } from "./pages";
import { PurchaseComplete, PurchasePending } from "./pages/purchase";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/purchase/pending" element={<PurchasePending />} />
        <Route path="/purchase/complete" element={<PurchaseComplete />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
