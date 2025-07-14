import { useParams } from "react-router-dom";
import useGetProduct from "../../../api/useGetProduct";
import { Flex } from "@radix-ui/themes";
import { LazyImage } from "../../../shared/image";
import Price from "../../../shared/text/price";
import ProductTags from "./productTags";
import { DocumentTitle } from "../../../shared/ui";

const ProductDetail = () => {
  const { id = "0" } = useParams();
  const { data: product } = useGetProduct({ id });

  const { thumbnail, images, title, price, discountPercentage, tags } = product;

  if (!product) return <>상품 정보를 찾을 수 없습니다.</>;

  return (
    <>
      <DocumentTitle>{`${title} | 상품 상세`}</DocumentTitle>
      <Flex direction="column" gap="4">
        <Flex direction="column" align="center" width="100%">
          <LazyImage
            src={thumbnail}
            placeholderSrc={images[0]}
            width="300px"
            height="300px"
          />
          <h2>{title}</h2>
        </Flex>
        <Price price={price} discountPercentage={discountPercentage} />
        <ProductTags tags={tags} />
      </Flex>
    </>
  );
};

export default ProductDetail;
