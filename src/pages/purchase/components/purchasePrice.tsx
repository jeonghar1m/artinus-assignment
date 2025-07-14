import { useCartStore } from "../../../store/cart";
import { Flex, Text } from "@radix-ui/themes";

const PurchasePrice = () => {
  const { cart } = useCartStore();

  const totalPrice = cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

  const totalDiscountedPrice = cart.reduce(
    (acc, product) => acc + product.discountedPrice * product.quantity,
    0
  );

  /** NOTE: 총 할인 가격 */
  const discountAmount = totalPrice - totalDiscountedPrice;

  return (
    <Flex gap="4px" direction="column" align="start">
      <Text size="5">총 가격: ${totalPrice.toFixed(2)}</Text>
      <Text size="5" color="red">
        총 할인 가격: -${discountAmount.toFixed(2)}
      </Text>
      <Text size="5" color="blue">
        총 결제 가격: ${totalDiscountedPrice.toFixed(2)}
      </Text>
    </Flex>
  );
};

export default PurchasePrice;
