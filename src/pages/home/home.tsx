import { Suspense } from "react";
import { DefaultTemplate } from "../../shared/template";
import ProductList from "./components/productList";
import ProductListSkeleton from "./components/productListSkeleton";

const Home = () => {
  return (
    <DefaultTemplate title="상품 리스트">
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </DefaultTemplate>
  );
};

export default Home;
