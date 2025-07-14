import { Flex } from "@radix-ui/themes";
import { LazyImage } from "../../../shared/image";
import Price from "../../../shared/text/price";
import type { CartProduct } from "../../../store/cart";
import QuantityInput from "./quantityInput";

export interface CartProps {
  product: CartProduct;
}

export const CartItem = ({ product }: CartProps) => {
  const { thumbnail, images, title, price, discountPercentage } = product;

  return (
    <Flex justify="between" gap="4">
      <Flex align="center" justify="start" width="100%">
        <LazyImage
          src={thumbnail}
          placeholderSrc={images[0]}
          width="100px"
          height="100px"
        />
        <Flex direction="column" gap="2">
          <h3>{title}</h3>
          <Price price={price} discountPercentage={discountPercentage} />
        </Flex>
      </Flex>
      <QuantityInput product={product} />
    </Flex>
  );
};
