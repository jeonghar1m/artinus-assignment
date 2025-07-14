import { CheckIcon } from "@radix-ui/react-icons";
import { Container } from "./purchase.style";
import { Heading } from "@radix-ui/themes";
import { useCartStore } from "../../../store/cart";
import { useEffect } from "react";
import { ReturnHomeButton } from "../../../shared/button";
import { useLocation } from "react-router-dom";

const PurchaseComplete = () => {
  const { setCart } = useCartStore();

  const location = useLocation();
  const isFromPending = (location.state as { isFromPending?: boolean })
    ?.isFromPending;

  useEffect(() => {
    if (isFromPending) {
      setCart([]);
      return;
    }
    throw new Error("구매 완료 페이지에서 올바르지 않은 접근입니다.");
  }, [isFromPending, setCart]);

  if (!isFromPending) {
    return null;
  }

  return (
    <Container direction="column" gap="10px" justify="center" align="center">
      <CheckIcon width={100} height={100} color="green" />
      <Heading>구매가 완료되었습니다.</Heading>
      <ReturnHomeButton />
    </Container>
  );
};

export default PurchaseComplete;
