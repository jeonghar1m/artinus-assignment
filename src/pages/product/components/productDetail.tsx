import { useParams } from "react-router-dom";
import useGetProduct from "../../../api/useGetProduct";
import { Flex } from "@radix-ui/themes";

const ProductDetail = () => {
  const { id = "0" } = useParams();
  const { data: product } = useGetProduct({ id });

  console.log(product);

  if (!product) return <>상품 정보를 찾을 수 없습니다.</>;

  return (
    <Flex direction="column" gap="4">
      <Flex direction="column" justify="center" width="100%">
        <img src={product.thumbnail} />
        <h2>{product.title}</h2>
      </Flex>
    </Flex>
  );
};

export default ProductDetail;
