import { Suspense } from "react";
import { DefaultTemplate } from "../../shared/template";
import ProductList from "./components/productList";
import Loading from "../../shared/ui/loading";

const Home = () => {
  return (
    <DefaultTemplate title="상품 리스트">
      <Suspense fallback={<Loading message="상품 목록을 불러오는 중입니다." />}>
        <ProductList />
      </Suspense>
    </DefaultTemplate>
  );
};

export default Home;
