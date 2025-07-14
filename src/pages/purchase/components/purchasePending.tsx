import { Heading, Spinner } from "@radix-ui/themes";
import { Container } from "./purchase.style";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCartStore } from "../../../store/cart";

const PurchasePending = () => {
  const { cart } = useCartStore();

  const navigate = useNavigate();

  const location = useLocation();
  const isFromPurchase = (location.state as { isFromPurchase?: boolean })
    ?.isFromPurchase;

  useEffect(() => {
    setTimeout(() => {
      navigate("/purchase/complete", { state: { isFromPending: true } });
    }, 5000);
  }, [navigate]);

  useEffect(() => {
    if (!isFromPurchase) {
      throw new Error("구매 진행 중 올바르지 않은 접근입니다.");
    }
    if (!cart.length) {
      throw new Error("장바구니에 담긴 상품이 없어 구매를 진행할 수 없습니다.");
    }
  }, [cart, isFromPurchase]);

  return (
    <Container direction="column" gap="10px" justify="center" align="center">
      <Spinner size="3" />
      <Heading>구매 진행 중...</Heading>
    </Container>
  );
};

export default PurchasePending;
