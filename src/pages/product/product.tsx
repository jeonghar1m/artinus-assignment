import { DefaultTemplate } from "../../shared/template";
import { Suspense, useEffect } from "react";
import ProductDetail from "./components/productDetail";
import { Loading } from "../../shared/ui";
import { useParams } from "react-router";

const Product = () => {
  const { id } = useParams();

  useEffect(() => {
    if (!id) {
      throw new Error("상품 id를 찾을 수 없습니다.");
    }
  }, [id]);

  if (!id) {
    return null;
  }

  return (
    <DefaultTemplate title="상품 상세" prevHref="/" enableDocumentTitle={false}>
      <Suspense
        fallback={<Loading message="상품 상세 정보를 불러오는 중입니다." />}
      >
        <ProductDetail />
      </Suspense>
    </DefaultTemplate>
  );
};

export default Product;
