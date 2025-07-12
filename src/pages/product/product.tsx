import { DefaultTemplate } from "../../shared/template";
import { Suspense } from "react";
import ProductDetail from "./components/productDetail";

const Product = () => {
  return (
    <DefaultTemplate title="상품 상세">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductDetail />
      </Suspense>
    </DefaultTemplate>
  );
};

export default Product;
