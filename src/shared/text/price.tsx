import { Flex, Text } from "@radix-ui/themes";
import type { Product } from "../../model";
import { OriginalPrice } from "./price.style";
import { calculateDiscountedPrice } from "../../util/calculateDiscountedPrice";

type PriceProps = Pick<Product, "price" | "discountPercentage">;

const Price = ({ price: originalPrice, discountPercentage }: PriceProps) => {
  const discountedPrice = calculateDiscountedPrice(
    originalPrice,
    discountPercentage
  );

  return (
    <Flex direction="column" gap="4px" align="start">
      <Flex gap="4px">
        <Text weight="bold" color="red">
          {discountPercentage}% 할인
        </Text>
        <OriginalPrice weight="medium" color="gray">
          ${originalPrice}
        </OriginalPrice>
      </Flex>
      <Text weight="bold" color="red">
        ${discountedPrice}
      </Text>
    </Flex>
  );
};

export default Price;
