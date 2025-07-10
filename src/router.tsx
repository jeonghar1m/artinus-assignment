import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage, ListPage } from "./pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/list" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
