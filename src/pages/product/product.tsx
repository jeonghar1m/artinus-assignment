import { DefaultTemplate } from "../../shared/template";
import { Suspense } from "react";
import ProductDetail from "./components/productDetail";
import { Skeleton } from "@radix-ui/themes";

const Product = () => {
  return (
    <DefaultTemplate title="상품 상세" prevHref="/">
      <Suspense fallback={<Skeleton width="100%" height="480px" />}>
        <ProductDetail />
      </Suspense>
    </DefaultTemplate>
  );
};

export default Product;
