import { useParams } from "react-router-dom";
import useGetProduct from "../api/useGetProduct";
import { DefaultTemplate } from "../shared/template";
import { Suspense } from "react";

const ProductDetail = () => {
  const { id = "0" } = useParams();
  const { data } = useGetProduct({ id });

  console.log(data);

  return (
    <DefaultTemplate title="상품 상세">
      <Suspense fallback={<div>Loading...</div>}>
        <>{data?.title}</>
      </Suspense>
    </DefaultTemplate>
  );
};

export default ProductDetail;
