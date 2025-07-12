import { DefaultTemplate } from "../../shared/template";
import { Suspense } from "react";
import ProductDetail from "./components/productDetail";
import Loading from "../../shared/ui/loading";

const Product = () => {
  return (
    <DefaultTemplate title="상품 상세" prevHref="/">
      <Suspense
        fallback={<Loading message="상품 상세 정보를 불러오는 중입니다." />}
      >
        <ProductDetail />
      </Suspense>
    </DefaultTemplate>
  );
};

export default Product;
