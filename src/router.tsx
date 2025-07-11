import { BrowserRouter, Route, Routes } from "react-router";
import { Home, List } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
