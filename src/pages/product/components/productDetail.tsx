import { useParams } from "react-router-dom";
import useGetProduct from "../../../api/useGetProduct";
import { Button, Flex } from "@radix-ui/themes";
import { LazyImage } from "../../../shared/image";
import Price from "../../../shared/text/price";
import ProductTags from "./productTags";
import { DocumentTitle } from "../../../shared/ui";
import { useCartStore } from "../../../store/cart";
import { calculateDiscountedPrice } from "../../../util/calculateDiscountedPrice";
import { useNavigate } from "react-router";

const ProductDetail = () => {
  const { id = "0" } = useParams();
  const { data: product } = useGetProduct({ id });

  const navigate = useNavigate();

  const { thumbnail, images, title, price, discountPercentage, tags } = product;

  const { cart, setCart } = useCartStore();

  const discountedPrice = calculateDiscountedPrice(price, discountPercentage);

  const handleAddToCart = () => {
    setCart([...cart, { ...product, quantity: 1, discountedPrice }]);
    const confirm = window.confirm(
      "장바구니에 담겼습니다. 구매 페이지로 이동하시겠습니까?"
    );
    if (confirm) navigate("/purchase");
  };

  const disabledAddCart = cart.some((item) => item.id === product?.id);

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
        <Button onClick={handleAddToCart} disabled={disabledAddCart}>
          장바구니에 넣기
        </Button>
      </Flex>
    </>
  );
};

export default ProductDetail;
