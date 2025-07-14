import { Button, Flex, Text } from "@radix-ui/themes";
import type { CartProps } from "./cartItem";
import { useCartStore } from "../../../store/cart";

type QuantityInputProps = CartProps;

const QuantityInput = ({ product }: QuantityInputProps) => {
  const { cart, setCart } = useCartStore();

  const { quantity } = product;

  const handleChangeQuantity = (type: "minus" | "plus") => {
    if (type === "minus" && product.quantity === 1) {
      // Remove the item when quantity would drop below 1
      setCart(cart.filter((item) => item.id !== product.id));
      return;
    }
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity: type === "minus" ? item.quantity - 1 : item.quantity + 1,
          }
        : item
    );
    setCart(updatedCart);
  };

  return (
    <Flex gap="4px" align="center">
      <Button onClick={() => handleChangeQuantity("minus")}>-</Button>
      <Text>{quantity}</Text>
      <Button onClick={() => handleChangeQuantity("plus")}>+</Button>
    </Flex>
  );
};

export default QuantityInput;
